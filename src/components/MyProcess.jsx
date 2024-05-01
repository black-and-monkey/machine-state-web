import {Button, FloatingLabel, Form} from "react-bootstrap";

export function MyProcess () {

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields.target, "fields",fields)
  }

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formMyProcess" >

          <FloatingLabel controlId="formMyProcessTitle" label="Title" className="mb-3">
            <Form.Control required type="text" placeholder="Title ..." autoFocus />
          </FloatingLabel>

          <FloatingLabel controlId="formMyProcessTitle" label="User" className="mb-3">
            <Form.Control required type="text" placeholder="User ..." />
          </FloatingLabel>

          <FloatingLabel controlId="formMyProcessTitle" label="Summary" className="mb-3">
            <Form.Control required as="textarea" rows={15} placeholder="summary ..."
            style={{height: '150px'}}/>
          </FloatingLabel>

        </Form.Group>

        <Button variant="primary" type="submit">
          save
        </Button>
      </Form>
  )
}

