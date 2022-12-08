
const obj = [
    {id: '1', name: 'Mtg Dominaria United - Commander Deck - Legends` Legacy', categoria: 'juegos-de-cartas-coleccionables', stock: '30', price: '57.000', foto:'https://http2.mlstatic.com/D_NQ_NP_647471-MLC52296292376_112022-O.webp'},
    {id: '2', name: 'Pokemon Mazo De Cartas Sol Y Luna Alolan Ninetales', categoria: 'juegos-de-cartas-coleccionables', stock: '15', price: '19.980', foto:'https://http2.mlstatic.com/D_NQ_NP_716658-MLC45030270325_022021-O.webp'},
    {id: '3', name: 'Mazo De Inicio Final Fantasy XII', categoria: 'juegos-de-cartas-coleccionables', stock: '100', price: '12.990',  foto:'https://http2.mlstatic.com/D_NQ_NP_690928-MLC48968860648_012022-O.webp'},
    {id: '4', name: 'Juego De Mesa Catan', categoria: 'juegos-de-mesa', stock: '100', price: '30.400',  foto:'https://http2.mlstatic.com/D_NQ_NP_742422-MLA51654029284_092022-O.webp'},
    {id: '5', name: 'Mansiones De La Locura, Expansión Calles De Arkham - Español', categoria: 'juegos-de-mesa', stock: '5',price: '31.990',  foto:'https://http2.mlstatic.com/D_NQ_NP_829501-MLC48928923119_012022-O.webp'},
    {id: '6', name: 'Exploding Kittens NSFW', categoria: 'juegos-de-mesa',stock: '30',price: '19.990',  foto:'https://http2.mlstatic.com/D_NQ_NP_927314-MLA46521726246_062021-O.webp'},
    {id: '7', name: 'Album Cartas Pokemon 240 Bolsillos', categoria: 'accesorios',stock: '30',price: '9.490',  foto:'https://http2.mlstatic.com/D_NQ_NP_735663-MLC49381073733_032022-O.webp'},
    {id: '8', name: 'GameGenic Protectores Standard Matte Black', categoria: 'accesorios',stock: '50',price: '7.490',  foto:'https://http2.mlstatic.com/D_NQ_NP_705008-MLC50278215758_062022-O.webp'},
    {id: '9', name: 'Deckbox Gamegenic Sidekick 100+ Convertible Purple - One Up', categoria: 'accesorios',stock: '10',price: '19.990',  foto:'https://http2.mlstatic.com/D_NQ_NP_854054-MLC48812937934_012022-O.webp'},
];

export const gFetch = (nro) => {
    return new Promise( (resolve, reject)=>{
        const condition = true
        if (condition) {    
            setTimeout(()=>{
                resolve(obj)
            }, nro)
        } else {
            reject( 'olvidate de tu cash' )        
        }
    } )
}
