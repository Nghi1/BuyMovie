import PRODUCTS from "../data/products";

const initState={
    products: PRODUCTS,
    favProducts: [],
    filterProducts: PRODUCTS
}
const reducer = (state= initState , action)=>{
    return state
}
export default reducer;