
export const getWorkflow = async (tenantId, workflowId) => {

    const res = await fetch(`http://localhost:9090/v-jstate/tenant/${tenantId}/workflow/${workflowId}`)
    return await res.json()
}

export const getWorkflows = async (tenantId ) => {

    const res = await fetch(`http://localhost:9090/v-jstate/tenant/${tenantId}/workflow`)
    return await res?.json()
}