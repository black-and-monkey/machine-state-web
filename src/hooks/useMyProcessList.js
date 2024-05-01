import {getProcessList} from "../services/myProcess";
import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {FiltersContext} from "../context/filters"

export function useMyProcessList ({search}) {

    const {filters} = useContext(FiltersContext)

    const [myProcessList, setMyProcessList] = useState()
    const previousSearch = useRef(search)

    const getMyProcessList = useCallback(async ({search}) => {

        if ( !filters.tenantId || !filters.workflowId || (search != '' && search === previousSearch.current )) {
            return
        }

        const newProcessList = await getProcessList({ tenantId : filters.tenantId, workflowId : filters.workflowId, search: search})
        setMyProcessList(newProcessList)
        previousSearch.current = search

    }, [filters.tenantId, filters.workflowId])

    useEffect(() => {
        getMyProcessList({search : ''}).then();
    }, [filters.tenantId, filters.workflowId]);

    return {myProcessList , getMyProcessList}
}