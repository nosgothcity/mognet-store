import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { gFetch } from '../../helpers/gFetch'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryName} = useParams()

    useEffect(()=>{
        setLoading(true)
        gFetch(1000)
        .then(data => {
            if(categoryName){
                setProduct(data.filter(element => element.categoria === categoryName.toLowerCase()))
            }else{
                setProduct(data)
            }
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
                            <img src={product.foto} alt="juego de cartas coleccionables Magic The Gathering" className="w-80 img-thumbnail"></img>
                            <h5 className="titulo">{product.name}</h5>
                            <p className="price">${product.price}</p>
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
