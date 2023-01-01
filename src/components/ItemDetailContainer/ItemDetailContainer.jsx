import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemCount from '../ItemCount/ItemCount'
import LoadingContainer from '../LoadingContainer/LoadingContainer'
import CheckCartOrContinue from '../CheckCartOrContinue/CheckCartOrContinue'
import { useCartContext } from '../../context/CartContext'

import './ItemDetailContainer.css'

const ItemListContainer = () => {
    const [ product, setProduct ] = useState([])
    const [ newAction, setNewAction ] = useState(false)
    const [loading, setLoading] = useState(true)
    const { addToCart } = useCartContext()
    const { productId } = useParams()
    
    useEffect(() => {
        setLoading(true)
        const fireStoreConnection = getFirestore()
        const queryDoc = doc(fireStoreConnection, 'productos', `${productId}`)
        getDoc(queryDoc)
            .then(resp => setProduct({ id: productId, ... resp.data()}))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [])

    const buyingProduct = (quantityToBuy) => {
        console.log("Cantidad de articulos agregados al carrito:", quantityToBuy)
        addToCart({... product, quantityToBuy})
        setNewAction(true)
    }

    return (
        <>
        {
            loading ? 
                <LoadingContainer />
            :
            <div className="container general-container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                <div className="tab-pane active img-thumbnail"><img src={product.image} /></div>
                                </div>
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{product.name}</h3>
                                <p className="product-description">Descripción: </p>
                                <h4 className="price">Precio: <span>${product.price}</span></h4>
                                <div className="action">
                                    {
                                        newAction ?
                                        <>
                                            <CheckCartOrContinue />
                                        </>
                                        :
                                        <>
                                            <ItemCount stock={product.stock} initial={1} buyingProduct={buyingProduct}/>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default ItemListContainer
