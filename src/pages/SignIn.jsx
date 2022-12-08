import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import NavBar from "../componants/NavBar";
import generateId from "../lib/generatedId";
import { setDoc, doc, query, onSnapshot, collection } from "firebase/firestore";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { fireStore } from "../auth/Firebase";
const SignIn = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [admin,setAdmin]= useState([]);
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
    const signin = (e) => {
        e.preventDefault();
        let id = generateId(10);
        let u=false
        admin.map(s => {

            if (s.user === user) {
                u = true

            }
            else
                u = u || false

        })
    if (password.length > 6 && !u) {
            
         setDoc(doc(fireStore, "admin", id), {
            user:user,
            password: password,
            nom: nom,
            prenom:prenom,
        });
        toast.success('Signed up successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        navigate("/login")
    }
    else if (u) {
        toast.error('This E-mail already used!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    }
    else {
        toast.error('Password must be at least 6 characters!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    }
}

    return (
        <>
            <NavBar />
            <div className="bg">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="glass-effect w-40 h-60 p-5">
                        <h1 className="fw-bolder fs-1 text-center">SignIn Admin</h1>
                        <Form className="mt-4 " onSubmit={signin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} className="form-control" required placeholder="Enter nom" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Prenom</Form.Label>
                                <Form.Control type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} className="form-control" required placeholder="Enter prenom" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>User</Form.Label>
                                <Form.Control type="text" value={user} onChange={(e) => setUser(e.target.value)} className="form-control" required placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required placeholder="Enter Password" />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="outline-dark" type="submit" >
                                    SignIn
                                </Button></div>
                        </Form>
                    </div>
                </div>
            </div>


        </>

    )
}
export default SignIn;