import {getWorkflows,getWorkflow} from "../services/workflow";
import {useContext, useEffect, useState} from "react";
import { FiltersContext } from '../context/filters.jsx'

export function useWorkflow () {

    const [workflow, setWorkflow] = useState()
    const {filters} = useContext(FiltersContext)

    useEffect(() => {

        if (!filters.tenantId || !filters.workflowId) return

        getWorkflow(filters.tenantId , filters.workflowId).then( x => setWorkflow(x))
    }, [filters.tenantId, filters.workflowId])

    return workflow
}

export function useWorkflows ( {tenantId} ) {

    const [workflows, setWorkflows] = useState()
    const {filters, setFilters} = useContext(FiltersContext)

    useEffect(() => {
        if (!tenantId) return

        getWorkflows(tenantId).then(workflows => {
            if (workflows.length > 0) {
                setFilters( {'tenantId':filters.tenantId, 'workflowId': workflows[0].workflowId });
                setWorkflows(workflows);
            }
        });

    }, [tenantId])

    return workflows
}