const myStateMachineUrl = import.meta.env.VITE_MY_STATE_MACHINE_API_URL
export const getWorkflow = async (tenantId, workflowId) => {

    const res = await fetch(`${myStateMachineUrl}/v-jstate/tenant/${tenantId}/workflow/${workflowId}`)
    return await res.json()
}

export const getWorkflows = async (tenantId ) => {

    const res = await fetch(`${myStateMachineUrl}/v-jstate/tenant/${tenantId}/workflow`)
    return await res?.json()
}