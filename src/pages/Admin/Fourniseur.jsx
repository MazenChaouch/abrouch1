import { Table } from "react-bootstrap";
import NavBarAdmin from "../../componants/NavBarAdmin"

const Fourniseur = () => {
    return (
        <>
            <NavBarAdmin />
            <div className="bg">
                <div className="fs-1 fw-bold text-center p-5">
                    Les Fourniseurs
                </div>
                <Table className="table-bordered">
                    <thead>
                        <tr className="text-center bg-dark text-white">
                            <th>#</th>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Adresse</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default Fourniseur; 