const myStateMachineUrl = import.meta.env.VITE_MY_STATE_MACHINE_API_URL


export function getProcessList ({tenantId, workflowId, search, token } ) {
    if (!search) {
        search = ''
    }

    const url = `${myStateMachineUrl}/v-jstate/tenant/${tenantId}/workflow/${workflowId}/my-process?search=${search}`

    return fetch(url , {
            method: 'GET',
            headers:
                {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
        }
    )

}


export const nextState = async ({tenantId, workflowId, myProcessId, next} ) => {
    const resp = await fetch(`${myStateMachineUrl}/v-jstate/tenant/${tenantId}/workflow/${workflowId}/my-process/${myProcessId}/next-state/${next}`, {
        method: 'PUT'
    });
    return resp.status
}

export function createProcess({tenantId, workflowId, user, title, summary, token} )  {
    const url = `${myStateMachineUrl}/v-jstate/tenant/${tenantId}/workflow/${workflowId}/my-process`

    return fetch(url, {
        method: 'POST',
        headers:
            {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            user: user,
            title: title,
            summary: summary
        })
    })
}

export function deleteMyProcess({tenantId, workflowId,myProcessId, token} )  {
    const url = `${myStateMachineUrl}/v-jstate/tenant/${tenantId}/workflow/${workflowId}/my-process/${myProcessId}`

    return fetch(url, {
        method: 'DELETE',
        headers:
            {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
    })
}
