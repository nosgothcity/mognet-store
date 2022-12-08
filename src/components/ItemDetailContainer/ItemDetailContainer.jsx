import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { gFetch } from '../../helpers/gFetch'
import ItemCount from '../ItemCount/ItemCount' 
import './ItemDetailContainer.css'

const ItemListContainer = () => {
    const [product, setProduct ] = useState([])
    const { productId } = useParams()
    
    useEffect(()=>{
        gFetch(500)
        .then(data => setProduct(data.find(element => element.id === productId)))
        .catch(err => console.log(err))
    }, [])

    const addToCart = (amountToBuy) => {
        console.log("Cantidad de articulos agregados al carrito:", amountToBuy)
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                <div className="tab-pane active img-thumbnail"><img src={product.foto} /></div>
                                </div>
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{product.name}</h3>
                                <p className="product-description">Descripción: </p>
                                <h4 className="price">Precio: <span>${product.price}</span></h4>
                                <div className="action">
                                    <ItemCount stock={product.stock} initial={1} addToCart={addToCart}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer
