import {Button, Col, Container, Form, Modal, Row, Spinner, Table} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {FiltersContext} from "../context/filters.jsx";
import {nextState} from "../services/myProcess.js";
import {useMyProcessList} from "../hooks/useMyProcessList.js";
import {MyProcess} from "./MyProcess.jsx";
import {toast, Toaster} from "sonner";

export function AvailableNextStates ({myProcess, workflow}) {

  const {filters, setFilters} = useContext(FiltersContext)

  const [currentState, setCurrentState] = useState(myProcess?.currentState)

  useEffect( () => {
  },[currentState])

  function handleSelectChange (event) {
    nextState(
        {
          'tenantId': filters.tenantId,
          'workflowId': filters.workflowId,
          'myProcessId': myProcess.id,
          'next': event.target.value}
    ).then(() => {
      setCurrentState(event.target.value)
    })
  }

  return <Form.Select name="availableStates" onChange={handleSelectChange}>

    <option value={currentState}> {currentState} </option>

    {workflow?.edges
        .filter(edge => edge.source.toUpperCase() === currentState.toUpperCase())
        .map((edge) => (
            <option key={edge.id} value={edge.target} > {edge.target} </option>
        ))}
  </Form.Select>
}

export function MySpinner (isLoading) {

  return isLoading.isLoading && (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
  )
}

export function MyList ( {workflow}) {

  // State to keep track of the selected option
  const [selectedMyProcess, setSelectedMyProcess] = useState();

  const [search, setSearch] = useState('')

  const {myProcessList, getMyProcessList, loading} = useMyProcessList({ search} )

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect( () => {
    //console.log('loading', loading)
  },[loading])


  const handleSubmitSearch = (event) => {
    event.preventDefault()
    getMyProcessList({search}).then()
  }

  const handleRefreshButton = () => {
    const empty = ''
    setSearch(empty)
    getMyProcessList({empty}).then()
  }
  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  function handleDelete(event) {
     toast.error('TODO DELETE !!!');
  }

  function handleEdit(event) {
     toast.error('TODO EDIT !!!');
  }


  return (

      <Container >

        <Toaster toastOptions={{
          style: {
            background: 'lightgray',
          }
        }}/>

        <MySpinner isLoading = {loading} />

        <Row className="mb-3">
          <h2>My Process List</h2>
        </Row>

        <Row className="mb-3">
          <Col>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Process</Modal.Title>
              </Modal.Header>
              <Modal.Body> <MyProcess/> </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <Form onSubmit={handleSubmitSearch}>
              <Row>
                <Col>
                  <Form.Control
                      type="text"
                      placeholder="title or summary..."
                      onChange={handleInputChange} // Set up onChange to update the inputValue state
                      value={search} // Control component with state
                  />
                </Col>
                <Col>
                  <Button type="submit">Search</Button>
                </Col>
              </Row>
            </Form>
          </Col>

          <Col>
            <Button variant="primary" onClick={handleShow}>
              New Process
            </Button>
          </Col>

          <Col>
            <Button onClick={handleRefreshButton}>Refresh</Button>
          </Col>

        </Row>

        <Row className="mb-3">

          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Summary</th>
              <th>User</th>
              <th>Created @</th>
              <th style={{width: '130px'}}>Status</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {myProcessList?.map((myProcess) => (
                <tr key={myProcess.id}>
                  <td>
                    {myProcess.id.split("-")[0]}
                  </td>
                  <td>
                    {myProcess.title}
                  </td>
                  <td>
                    {myProcess.body}
                  </td>
                  <td>
                    {myProcess.user}
                  </td>
                  <td>
                    {myProcess.createdAtUtc}
                  </td>
                  <td>
                    <AvailableNextStates myProcess={myProcess} workflow={workflow}/>
                  </td>
                  <td>

                    <Button variant="outline-primary" type="button" >

                      <svg onClick={handleEdit} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                        <path
                            d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                      </svg>
                    </Button>

                    <Button variant="danger" type="button" >
                      <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                      </svg>
                    </Button>
                  </td>
                </tr>
            ))}
            </tbody>
          </Table>

        </Row>

      </Container>
  )
}