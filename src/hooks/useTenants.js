import {useContext, useEffect, useState} from "react";
import {getTenants} from "../services/tenant";
import {FiltersContext} from '../context/filters.jsx'

export function useTenants () {

    const {filters, setFilters} = useContext(FiltersContext)

    const [tenants, setTenants] = useState([])

    useEffect( () => {
        async function fetchTenants () {
            const tenants = await getTenants()
            setTenants(tenants)
            setFilters({'tenantId': tenants[0].tenantId, 'workflowId': undefined})
        }

        fetchTenants().then()
    }, [])

    return {tenants}
}