import { useState } from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './CartContainer.css'

const CartContainer = () => {
    const [dataForm, setFormData] =  useState({ name: '', phone: '', email: ''})
    const {cartList, totalQuantityOfProducts, totalPrice, emptyCart, deleteProductInCart} = useCartContext()
    const [createdOrder, setCreatedOrder] = useState('')
    const [validateForm, setValidateForm] = useState(true)

    const addOrder = (event) => {
        if(dataForm.name === '' || dataForm.phone === '' || dataForm.email === ''){
            setValidateForm(false)
            event.preventDefault()
        } else {
            event.preventDefault()
            const fireStoreConnection = getFirestore()
            const newOrder = {
                buyer: dataForm,
                items: cartList.map(product => ({id: product.id, title: product.name, price: product.price}) ),
                total: totalPrice()
            }
            const queryCollection = collection(fireStoreConnection, 'orders')
            addDoc(queryCollection, newOrder)
                .then(resp => setCreatedOrder(resp.id))
                .then(() => updateProductStock())
                .catch(err => console.log(err))
                .finally(emptyCart())
        }
    }

    const handleOnChange = (event) => {
        setFormData({
          ...dataForm,
          [event.target.name]: event.target.value
        })
    }

    return (
        <>
        {
            cartList.length > 0 ?
                <>
                <div className="card cart-total">
                    <div className="row">
                        <div className="col-md-8 cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col"><h4><b>Carrito</b></h4></div>
                                </div>
                            </div>
                                {
                                    cartList.map(product =>
                                        <div className="row border-top border-bottom" key={product.id}>
                                            <div className="row main align-items-center product-list">
                                                <div className="col-2"><img className="img-fluid" src={product.image}></img></div>
                                                <div className="col">
                                                    <div className="row text-muted">{product.name}</div>
                                                    <hr />
                                                    <div className="row">Categoria: {product.category.replaceAll('-',' ')}</div>
                                                </div>
                                                <div className="col"><b>Precio:</b> ${product.price}</div>
                                                <div className="col"><b>Cantidad:</b> {product.quantityToBuy}</div>
                                                <div className="col">
                                                    <button onClick={() => deleteProductInCart(product.id)} className="btn btn-outline-danger"> X </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                        </div>
                        <div className="col-md-4 summary">
                            <div><h5><b>Total Compra</b></h5></div>
                            <hr/>
                            <div className="row purchase-information">
                                <div className="col"><b>{totalQuantityOfProducts()} producto(s):</b></div>
                                <div className="col text-right"><b>${totalPrice()}</b></div>
                            </div>
                            <div>
                                <h5>Ingrese sus datos:</h5>
                                <form>
                                    <div className="form-group form-elem">
                                        <label >Nombre completo.</label>
                                        <input type="text" onChange={handleOnChange} name="name" value={dataForm.name} className="form-control" aria-describedby="emailHelp" placeholder="Ingrese su nombre completo." />
                                    </div>
                                    <div className="form-group form-elem">
                                        <label >Teléfono de contacto.</label>
                                        <input type="text" onChange={handleOnChange} name="phone" value={dataForm.phone} className="form-control" placeholder="Ingrese un teléfono de contacto." />
                                    </div>
                                    <div className="form-group form-elem">
                                        <label >Email</label>
                                        <input type="email" onChange={handleOnChange} name="email" value={dataForm.email} className="form-control" placeholder="Ingrese su email." />
                                    </div>
                                    <button className="btn btn-outline-success actions" onClick={addOrder} >Realizar Compra</button>
                                    {
                                        validateForm ? <></>
                                        :
                                            <>
                                                <div class="alert alert-danger alert-message" role="alert">Debe ingresar los datos del formulario.</div>
                                            </>
                                    }
                                </form>
                            </div>
                            <button className="btn btn-outline-danger actions" onClick={emptyCart} >Vaciar Carro</button>
                        </div>
                    </div>
                </div>
                </>
            :
            <>
                <div className="card cart-total">
                    {
                        createdOrder !== '' ?
                            <>
                                <h2>Orden Creada</h2>
                                <h3>Id de orden: {createdOrder}</h3>
                            </>
                        :
                            <h2>Carrito Vacio</h2>
                    }
                    <Link to= '/'> Volver a la pagina principal. </Link>
                </div>
            </>  
        }
        </>
    )
}

export default CartContainer