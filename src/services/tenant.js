
export const getTenants = async () => {
    const res = await fetch(`http://localhost:9090/v-jstate/tenant`)
    return await res.json()
}