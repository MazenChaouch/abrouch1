import { collection, onSnapshot, query, setDoc, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { fireStore } from "../../auth/Firebase";
import NavBarAdmin from "../../componants/NavBarAdmin"
import generateId from "../../lib/generatedId";

const Produit = () => {
    const [produits, setProduits] = useState([]);
    const [fourniseur, setFourniseur] = useState([]);
    const [nom, setNom] = useState("");
    const [quantity, setQuantity] = useState("");
    const [prix, setPrix] = useState("");

    
    const addProduit = () => {
        let id = generateId(4)
        setDoc(doc(fireStore, "produit", id), {
            fourniseur: fourniseur,
            nom: nom,
            quantity: quantity,
            prix: prix
        })
    };

    
    const [fourniseurs, setFourniseurs] = useState([]);
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
    
    const getProduits = async () => {
        const q = query(collection(fireStore, "produit"));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const result = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setProduits(result);
            });
        });
    }
    useEffect(() => {
        getFourniseurs();
        getProduits();
    }, [])
    return (
        <>
            <NavBarAdmin /><div className="bg">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <Container className="row">
                        <div className="col-md-6">

                            <Table striped bordered hover size="sm" variant="dark">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Fourniseur</th>
                                        <th>Nom</th>
                                        <th>Quantité</th>
                                        <th>Prix</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    produits.map((p, index) => {
                                        return (
                                            <tr key={index} className="bg-light text-black" >
                                                <td>{index + 1}</td>
                                                <td>{p.fourniseur}</td>
                                                <td>{p.nom}</td>
                                                <td>{p.quantity}</td>
                                                <td>{p.prix}</td>
                                                <td><Button variant="danger" size="sm" onClick={() => deleteDoc(doc(fireStore, "produit", p.id))}>X</Button></td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                        </div>
                        <div className="glass-effect col-sm-6">

                            <h1 className="fw-bolder fs-1 text-center">ajout de produit</h1>
                            <Form className="mt-4 row" onSubmit={addProduit}>
                                <Form.Group className="mb-3 col-sm-6" controlId="formBasicPassword">
                                    <Form.Label>Fourniseur</Form.Label>
                                    <Form.Select aria-label="Default select example" value={fourniseur} onChange={(e) => setFourniseur(e.currentTarget.value)}>
                                        <option>selectionner un fourniseur</option>
                                        {
                                            fourniseurs.map((f, index) => {
                                                return <option tabIndex={index} value={f.nom}>{f.nom}</option>
                                            })
                                        }

                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6" controlId="formBasicPassword">
                                    <Form.Label>nom</Form.Label>
                                    <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} className="form-control" required placeholder="entre le nom de produit" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6" controlId="formBasicPassword">
                                    <Form.Label>Quantité</Form.Label>
                                    <Form.Control type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control" required placeholder="entre la quantité de produit" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6" controlId="formBasicPassword">
                                    <Form.Label>Prix</Form.Label>
                                    <Form.Control type="text" value={prix} onChange={(e) => setPrix(e.target.value)} className="form-control" required placeholder="entre le prix de produit" />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button variant="outline-dark" type="" >
                                        ajouter
                                    </Button>
                                </div>
                            </Form>

                        </div>
                    </Container>
                </div>
            </div>

        </>
    )
}
export default Produit; 