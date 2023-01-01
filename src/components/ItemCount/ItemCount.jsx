import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock = 10, initial = 1, buyingProduct}) => {
    const [count, setCount] = useState(initial)

    const restar = () => {
        if(count > initial){
            setCount(count-1)
        }
    }

    const sumar = () => {
        if(count < stock){
            setCount(count+1)
        }
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <label htmlFor=""><h5>Cantidad: {count}</h5></label>
                </div>
                <div className="card-body">
                    <button onClick={restar} className="operator btn btn-outline-primary"> - </button>
                    <button onClick={sumar} className="operator btn btn-outline-primary"> + </button>
                </div>
                <div className="card-footer">
                    <button className="add btn btn-outline-success" onClick={() => buyingProduct(count)}> Agregar Al Carrito </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount