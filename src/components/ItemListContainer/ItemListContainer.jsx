import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts ] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryName} = useParams()

    useEffect(() => {
        setLoading(true)        
        const fireStoreConnection = getFirestore()
        let queryProducts = collection(fireStoreConnection, 'productos')

        if(categoryName){
            queryProducts = query(queryProducts, where('category', '==', categoryName))
        } 

        getDocs(queryProducts)
            .then(data => {
                const arrayData = data.docs.map(product => ({ id: product.id, ... product.data()}))
                setProducts(arrayData)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))

    }, [categoryName])

    return (
        <>
            <div className="items row">
                {
                    loading ? <h2>Cargando productos...</h2> :
                    products.map( product => 
                        <article className="product-article col-sm-12 col-md-6 col-lg-4" key={product.id}>
                            <img src={product.image} alt="juego de cartas coleccionables Magic The Gathering" className="w-80 img-thumbnail"></img>
                            <h5 className="titulo">{product.name}</h5>
                            <p className="price">Precio: ${product.price}</p>
                            <Link to={`/product/${product.id}`}>
                                <button className="btn btn-outline-primary btn-block"> Detalle Producto </button>
                            </Link>
				        </article>
                    )
                }
            </div>
        </>
    )
}

export default ItemListContainer
