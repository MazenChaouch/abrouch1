import { collection, onSnapshot, query, setDoc, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { fireStore } from "../../auth/Firebase";
import NavBarAdmin from "../../componants/NavBarAdmin"
import generateId from "../../lib/generatedId";

const Produit = () => {
    const [produit, setProduit] = useState([]);
    const [nom, setNom] = useState("");
    const [idp, setIdp] = useState("");
    const [quantity, setQuantity] = useState("");
    const [prix, setPrix] = useState("");

    let id = generateId(10)
    const addProduit = (e) => {
        e.preventDefault();
        setDoc(doc(fireStore, "produit", id), {
            idp: idp,
            nom: nom,
            quantity: quantity,
            prix: prix
        })
    };


    const getProduit = async () => {
        const q = query(collection(fireStore, "produit"));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const result = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setProduit(result);
            });
        });
    }
    useEffect(() => {
        getProduit();
    }, [])
    return (
        <>
            <NavBarAdmin />
            <div className="bg">
                <Container>
                    <div className="fs-1 fw-bold text-center p-5">
                        Les Produits
                    </div>
                    <Table className="table-bordered">
                        <thead>
                            <tr className="text-center bg-dark text-white">
                                <th>#</th>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Quantité</th>
                                <th>Prix</th>
                                <th>supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                produit.map((p, index) => {
                                    return (
                                        <tr key={index} className="text-center bg-light text-black" >
                                            <td>{index + 1}</td>
                                            <td>{p.idp}</td>
                                            <td>{p.nom}</td>
                                            <td>{p.quantity}</td>
                                            <td>{p.prix}</td>
                                            <td><Button variant="danger" size="sm" onClick={deleteDoc(doc(fireStore, "produit", p.id))}>X</Button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    <form className="row g-3 mt-2 rounded" onSubmit={addProduit}>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label fw-bold">Id</label>
                            <input type="text" value={idp} onChange={(e) => setIdp(e.currentTarget.value)} className="form-control" placeholder="Entrer le nom de la formation" required />
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label fw-bold">Nom</label>
                            <input type="text" value={nom} onChange={(e) => setNom(e.currentTarget.value)} className="form-control" placeholder="Entrer le nom de la formation" required />
                        </div>
                        <div className="col-md-3">
                            <label for="inputEmail4" className="form-label fw-bold">Quantité</label>
                            <input type="text" value={quantity} onChange={(e) => setQuantity(e.currentTarget.value)} className="form-control" placeholder="Entrer le nom de la formation" required />
                        </div>
                        <div className="col-md-3">
                            <label for="inputPassword4" className="form-label fw-bold">Prix</label>
                            <input type="text" value={prix} onChange={(e) => setPrix(e.currentTarget.value)} className="form-control" placeholder="Entrer le nom du formateur" required />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                    </form>
                </Container>
            </div>
        </>
    )
}
export default Produit; 