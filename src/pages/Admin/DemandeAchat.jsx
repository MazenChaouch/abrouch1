import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import NavBarAdmin from "../../componants/NavBarAdmin"

const DemandeAchat = () => {
    const [idd, setIdd] = useState();
    const [date, setDate] = useState();
    return (
        <>
            <NavBarAdmin />
            <div className="bg">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="glass-effect responsiv p-5">
                        <h1 className="fw-bolder fs-1 text-center">Demande d'achat</h1>
                        <Form className="mt-4 ">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" value={idd} onChange={(e) => setIdd(e.target.value)} className="form-control" required placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control" required placeholder="Password" />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="outline-dark" type="submit" >
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DemandeAchat; 