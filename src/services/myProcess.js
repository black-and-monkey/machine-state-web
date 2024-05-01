export const getProcessList = async ({tenantId, workflowId, search } ) => {
  if (!search) {
    search = ''
  }
  const res = await fetch(`http://localhost:9090/v-jstate/tenant/${tenantId}/workflow/${workflowId}/my-process?search=${search}`)
  return  await res.json()

}

export const nextState = async ({tenantId, workflowId, myProcessId, next} ) => {
  const resp = await fetch(`http://localhost:9090/v-jstate/tenant/${tenantId}/workflow/${workflowId}/my-process/${myProcessId}/next-state/${next}`, {
    method: 'PUT'
  });
  return resp.status
}