import { getProcessList} from "../services/myProcess";
import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {FiltersContext} from "../context/filters"
import {useAuth0} from "@auth0/auth0-react";

export function useMyProcessList ({search}) {

    const {filters} = useContext(FiltersContext)

    const [myProcessList, setMyProcessList] = useState()
    const previousSearch = useRef(search)
    const {getAccessTokenSilently} = useAuth0();

    const [loading, setLoading] = useState(true)

    const getMyProcessList = useCallback(async ({search}) => {

        if ( !filters.tenantId || !filters.workflowId/* || (search !== '' && search === previousSearch.current )*/) {
            return
        }

        const newProcessList = await getProcessList(
            { tenantId :
                filters.tenantId,
                workflowId : filters.workflowId,
                search: search,
                token: await getAccessTokenSilently()}
        ).then( response => response.json())

        setMyProcessList(newProcessList)
        previousSearch.current = search

        setLoading(false)

    }, [filters.tenantId, filters.workflowId])

    useEffect(() => {
        getMyProcessList({search : ''}).then();
    }, [filters.tenantId, filters.workflowId]);

    return {myProcessList , getMyProcessList, loading}
}