import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <section className="greeting">
                <h1> Item List Container </h1>
                <br />
                <h2> {greeting} </h2>
            </section>
        </>
    )
}

export default ItemListContainer