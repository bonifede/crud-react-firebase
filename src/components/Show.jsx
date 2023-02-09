import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

const Show = () =>{

const [products,setProducts] = useState([])
// referenciamos la base de datos de firestore
const productsCollection = collection(db,"products")
//Funcion para mostrar todos los docs
const getProducts = async ()=>{
    const data = await getDocs(productsCollection)

setProducts (
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    )
console.log(products) 
}
// Funcion para eliminar un doc
const deleteProduct = async(id)=>{
const productDoc = doc(db,"products",id)
await deleteDoc(productDoc)
getProducts()
}
// funcion de confirmacion para Sweet alert 2
const confirmDelete= (id)=>{
MySwal.fire({
    title:"Está seguro/a que desea eliminar el producto?",
    text: "Este Proceso no es Reversible",
    icon: "Warning",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si deseo Eliminar'
}).then((result) => {
    if (result.isConfirmed) {
        deleteProduct(id)
Swal.fire(
        'Eliminado!',
        'Tu Producto ha sido Eliminado.',
        'success'
)
    }
})
}


useEffect(()=>{
    getProducts()
 
},[])

return (
// Fragment 
<> 
<div className="container">
    <div className="row">
        <div className="col">
<div className="d-grid gap-2">
<Link to="/create" className="btn btn-secondary mt-2 mb-2">Create</Link>
</div>
<table className="table table-dark table-hover">
<thead>
<tr>
    <th>Description</th>
    <th>Stock</th>
    <th>Actions</th>
</tr>
</thead>

<tbody>
{products.map((product)=>(
    <tr key={product.id}>
<td>{product.description}</td>
<td>{product.stock}</td>
<td>
    <Link to={`/edit/${product.id}`}className= "btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
<button onClick={()=>{confirmDelete(product.id)}} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
</td>
    </tr>
))}

</tbody>

</table>
        </div>

    </div>

</div>
</>
)
}
export default Show
 

