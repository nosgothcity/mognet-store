import { useContext, createContext, useState } from "react"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const totalQuantityOfProducts = () => cartList.reduce((counter, product) => counter += product.quantityToBuy , 0)
    const totalPrice = () => cartList.reduce((counter, product) => counter += (product.price * product.quantityToBuy) , 0)
    const emptyCart = () => setCartList([])
    const deleteProductInCart = (id) => setCartList(cartList.filter(product => product.id !== id))

    const addToCart = product => {
        const checkProduct = cartList.findIndex(element => element.id === product.id)

        if(checkProduct !== -1){
            cartList[checkProduct].quantityToBuy += product.quantityToBuy
            setCartList([... cartList])
        } else {
            setCartList([... cartList, product])
        }
    }

    return(
        <CartContext.Provider value={
            {
                cartList,
                addToCart,
                totalQuantityOfProducts,
                totalPrice,
                emptyCart,
                deleteProductInCart,
            }
        }>
            { children }
        </CartContext.Provider>
    )
}
