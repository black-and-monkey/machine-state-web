import {Button, FloatingLabel, Form} from "react-bootstrap";
import {toast, Toaster} from "sonner";

export function MyProcess () {

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)

        //https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
        const title = formData.get("title")
        const user = formData.get("user")
        const summary = formData.get("summary")

        // se podria usar
        // const fields = Object.fromEntries(new window.FormData(event.target))

        console.log("fields", {title, user, summary})
        form.reset()
        toast.error('Process has not been created !!! TODO !!!')
    }

    return (

        <div>
            <Toaster/>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formMyProcess" >

                    <FloatingLabel controlId="formMyProcessTitle" label="Title" className="mb-3">
                        <Form.Control name="title" required type="text" placeholder="Title ..." autoFocus />
                    </FloatingLabel>

                    <FloatingLabel controlId="formMyProcessUser" label="User" className="mb-3">
                        <Form.Control name="user"  required type="text" placeholder="User ..." />
                    </FloatingLabel>

                    <FloatingLabel controlId="formMyProcessSummary" label="Summary" className="mb-3">
                        <Form.Control name="summary" required as="textarea" rows={15} placeholder="summary ..."
                                      style={{height: '200px'}}/>
                    </FloatingLabel>

                </Form.Group>

                <Button variant="primary" type="submit">
                    save
                </Button>
            </Form>
        </div>
    )
}

