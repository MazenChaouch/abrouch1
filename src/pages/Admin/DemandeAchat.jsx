import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { fireStore } from "../../auth/Firebase";
import NavBarAdmin from "../../componants/NavBarAdmin"

const DemandeAchat = () => {
    const [idd, setIdd] = useState();
    const [date, setDate] = useState();
    const [fourniseur , setFourniseur] = useState([]);
    const [fourniseurs , setFourniseurs] = useState([]);
    const getFourniseurs = async () => {
        const q = query(collection(fireStore, "fourniseur"));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const result = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setFourniseurs(result);
            });
        });
    }
    useEffect(() => {
        getFourniseurs();
    }, [])
    return (
        <>
            <NavBarAdmin />
            <div className="bg">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        <div className="col-md-6">
                            <Container>
                                <Table striped bordered hover size="sm" variant="dark">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>fourniseur</th>
                                            <th>produit</th>
                                            <th>quantité</th>
                                        </tr>
                                    </thead>
                                    <tbody>{
                                    }
                                    </tbody>
                                </Table>
                            </Container>
                        </div>
                        <div className="glass-effect responsive p-5 col-md-6">
                            <h1 className="fw-bolder fs-1 text-center">ajout de produit</h1>
                            <Form className="mt-4 ">
                                <Form.Select aria-label="Default select example" value={fourniseur} onChange={(e) => setFourniseur(e.currentTarget.value)}>
                                    <option>selectionner un fourniseur</option>
                                    {
                                        fourniseurs.map((f, index) => {
                                            return <option tabIndex={index} value={f.nom}>{f.nom}</option>
                                        })
                                    }
                                </Form.Select>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control" required placeholder="Password" />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button variant="outline-dark" type="submit" >
                                        ajouter
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DemandeAchat; 