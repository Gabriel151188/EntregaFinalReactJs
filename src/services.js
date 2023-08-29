
const products= [
    {id: "1", name: "Chardonnay", price: 1550, category: "wines", description: "vino chardonnay"},
    {id: "2", name: "Malbec", price: 1530, category: "wines", description: "vino malbec"},
    {id: "3", name: "Cabernet", price: 1500, category: "wines", description: "vino cabernet"},
    {id: "4", name: "Aperol", price: 1350, category: "aperitivos", description: "aperitivo naranja"},
    {id: "5", name: "Fernet", price: 2500, category: "aperitivos", description: "fernet Branca"},
    {id: "6", name: "Campari", price: 1300, category: "aperitivos", description: "aperitivo rojo"},
    {id: "7", name: "Agua sin gas", price: 600, category: "sinalcohol", description: "agua villavicencio sin gas"},
    {id: "8", name: "Agua con gas", price: 600, category: "sinalcohol", description: "agua villavicencio con gas"},
    {id: "9", name: "Cepita", price: 700, category: "sinalcohol", description: "jugo de naranja"},
];

//get Product
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //buscamos el prod por id
            const product = products.find(p => p.id === id);
            //si existe
            if(product){
                resolve(product)
            }else{
                reject("no existe el producto")
            }

        }, 1000)
    })
}


//get Products
export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFiltered = category ? products.filter((product) =>product.category === category) :products;
            resolve(productsFiltered)

        }, 1000);
    });
};
