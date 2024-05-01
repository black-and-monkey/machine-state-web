export function RenderMyProcess (props) {
  if (!props.selectedMyProcess) return null

  return (
    <div>
      <h2> {props.selectedMyProcess.title}</h2>
      <p style={{border: '1px solid'}}> {props.selectedMyProcess.body} </p>
      <p>user : {props.selectedMyProcess.user} </p>
      <p>created @ : {props.selectedMyProcess.createdAtUtc} </p>
      <p>State : {props.selectedMyProcess.currentState} </p>
      <p>
        status :
        <select name="available states">
          <option value="{selectedMyProcess.currentState}">{props.selectedMyProcess.currentState} </option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
      </p>
    </div>
  )
}