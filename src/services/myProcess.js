import {useAuth0} from "@auth0/auth0-react";

const myStateMachineUrl = import.meta.env.VITE_MY_STATE_MACHINE_API_URL
export const getProcessList = async ({tenantId, workflowId, search, token } ) => {
    if (!search) {
        search = ''
    }

    const url = `${myStateMachineUrl}/v-jstate/tenant/${tenantId}/workflow/${workflowId}/my-process?search=${search}`

    const res = await fetch(url , {
            method: 'GET',
            headers:
                {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
        }
    )
    return await res.json()

}

export const nextState = async ({tenantId, workflowId, myProcessId, next} ) => {
    const resp = await fetch(`${myStateMachineUrl}/v-jstate/tenant/${tenantId}/workflow/${workflowId}/my-process/${myProcessId}/next-state/${next}`, {
        method: 'PUT'
    });
    return resp.status
}

export const createProcess = async ({tenantId, workflowId, user, title, summary, token} ) => {
    const url = `${myStateMachineUrl}/v-jstate/tenant/${tenantId}/workflow/${workflowId}/my-process`

    const resp = await fetch(url, {
        method: 'POST',
        headers:
            {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        body :  JSON.stringify({
            user : user,
            title: title,
            summary: summary
        })
    });
    return resp.status
}

