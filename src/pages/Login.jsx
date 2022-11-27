import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import NavBar from "../componants/NavBar";
import { query, onSnapshot, collection } from "firebase/firestore";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { fireStore } from "../auth/Firebase";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin,setAdmin]= useState([]);
    const navigate = useNavigate();
    const getAdmin = async () => {
        const q = query(collection(fireStore, "admin"));
            onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const result = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setAdmin(result);
            });
        });
    }
    useEffect(() => {
        getAdmin();
    }, [])
    const log = (e) => {
        e.preventDefault();
        let id = null ;
        let user = false;
        admin.map(s => {

            if (s.email === email && s.password === password) {
                user = true
                id = s.id
            }
            else
                user = user || false

        })
        if (user) {
            localStorage.setItem('user', id)
            navigate("/admin/fourniseur/"+id);
            toast.success('Logged in', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }

        else {
            toast.error('Login information are unavaileble', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }
    }
    return (
        <>
            <NavBar />
            <div className="bg">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="glass-effect responsiv p-5">
                        <h1 className="fw-bolder fs-1 text-center">Login Admin</h1>
                        <Form className="mt-4 " onSubmit={log}>
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