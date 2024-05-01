import React, {useContext, useState} from 'react'
import {FiltersContext} from '../context/filters.jsx'
import {useTenants} from '../hooks/useTenants.js'
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {useWorkflow, useWorkflows} from "../hooks/useWorkflow.js";
import {RenderWorkflow} from "./MyWorkflow.jsx";

export function Header () {

    const {filters, setFilters} = useContext(FiltersContext)

    const {tenants} = useTenants()
    const workflows = useWorkflows({tenantId : filters.tenantId})

    const workflow = useWorkflow()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSelectWorkflowChange (event) {
        setFilters({workflowId:  event.target.value, tenantId: filters.tenantId})
    }

    function handleSelectTenantChange (event) {
        setFilters({workflowId:  filters.workflowId, tenantId: event.target.value})
    }

    return (
        <Container className="mb-3">

            <Row>
                <Col>
                    <Form.Select
                        name="availableTenats"
                        onChange={handleSelectTenantChange}
                        value={filters.tenantId}
                        disabled={tenants?.length === 1}
                    >
                        {tenants?.map(
                            (tenant, index) => (
                                <option key={index} value={tenant.tenantId}> {tenant.name}</option>
                            ))}
                    </Form.Select >
                </Col>

                <Col>
                    <Form.Select
                        name="availableWorkflows"
                        onChange={handleSelectWorkflowChange}
                        value={filters.workflowId}
                        disabled={workflows?.length === 1}
                    >
                        {workflows?.map(
                            (workflow, index) => (
                                <option key={index} value={workflow.workflowId}> {workflow.name} </option>
                            ))}
                    </Form.Select>
                </Col>

                <Col>

                    <Button variant="primary" onClick={handleShow}>
                        Open Workflow
                    </Button>

                    <Modal
                        size="xl"
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{workflow?.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <RenderWorkflow workflow={workflow} height={800} width={1000}></RenderWorkflow>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    )
}


