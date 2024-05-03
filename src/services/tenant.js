const myStateMachineUrl = import.meta.env.VITE_MY_STATE_MACHINE_API_URL
export const getTenants = async () => {

    const res = await fetch(`${myStateMachineUrl}/v-jstate/tenant`)

    return await res.json()
}