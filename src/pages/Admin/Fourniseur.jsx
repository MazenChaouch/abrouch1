import { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import NavBarAdmin from "../../componants/NavBarAdmin"
import { setDoc, doc, query, onSnapshot, collection, deleteDoc } from "firebase/firestore";
import { fireStore } from "../../auth/Firebase";
import generateId from "../../lib/generatedId";


const Fourniseur = () => {
    const [fourniseur, setFourniseur] = useState([]);
    const [nom, setNom] = useState("");
    const [adresse, setAdresse] = useState("");
    let id = generateId(10)
    const addFourniseur = (e) => {
        e.preventDefault();
        setDoc(doc(fireStore, "fourniseur", id), {
            nom: nom,
            adresse: adresse,
        })
    };


    const getFourniseur = async () => {
        const q = query(collection(fireStore, "fourniseur"));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const result = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setFourniseur(result);
            });
        });
    }
    useEffect(() => {
        getFourniseur();
    }, [])
    return (
        <>
            <NavBarAdmin />
            <div className="bg">
                <Container className="pt-3">
                    <div className="fs-1 fw-bold text-center p-5">
                        Les Fourniseurs
                    </div>
                    <form className="row g-3 rounded" onSubmit={addFourniseur}>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label fw-bold">Nom</label>
                            <input type="text" value={nom} onChange={(e) => setNom(e.currentTarget.value)} className="form-control" placeholder="Entrer le nom de la formation" required />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label fw-bold">Adresse</label>
                            <input type="text" value={adresse} onChange={(e) => setAdresse(e.currentTarget.value)} className="form-control" placeholder="Entrer le nom du formateur" required />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                    </form>
                    
                    <Table className="table-bordered">
                        <thead>
                            <tr className="text-center bg-dark text-white">
                                <th>#</th>
                                <th>Nom</th>
                                <th>Adresse</th>
                                <th>supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fourniseur.map((f, index) => {
                                    return (
                                        <tr key={index} className="text-center bg-light text-black" >
                                            <td>{index + 1}</td>
                                            <td>{f.nom}</td>
                                            <td>{f.adresse}</td>
                                            <td><Button variant="danger" size="sm" onClick={() => deleteDoc(doc(fireStore, "fourniseur", f.id))}>X</Button></td>
                                        </tr>
                                    )
                                }

                                )
                            }
                        </tbody>
                    </Table>

                    
                </Container>
            </div>
        </>
    )
}
export default Fourniseur; 