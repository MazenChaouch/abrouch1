import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import NavBar from "../componants/NavBar";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <NavBar />
            <div className="bg">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="glass-effect w-40 h-50 p-5">
                        <h1 className="fw-bolder fs-1 text-center">Login Admin</h1>
                        <Form className="mt-4 ">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required placeholder="Password" />
                            </Form.Group>
                            <div className="d-grid gap-2">
                            <Button variant="outline-dark" type="submit" >
                                Login
                            </Button></div>
                        </Form>
                    </div>
                </div>
            </div>


        </>

    )
}
export default Login;