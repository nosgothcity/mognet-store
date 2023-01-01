import { Link } from 'react-router-dom'
import './CheckCartOrContinue.css'

const CheckCartOrContinue = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <p> Producto(s) agregado(s) al carrito.</p>
                </div>
                <div className="card-body">
                    <Link to="/cart">
                        <button className="options btn btn-outline-success" > Ir Al Carrito. </button>
                    </Link>
                    <Link to="/">
                        <button className="options btn btn-outline-info" > Continuar Comprando. </button>
                    </Link>
                </div>
                <div className="card-footer">
                </div>
            </div>
        </>
    )
}

export default CheckCartOrContinue