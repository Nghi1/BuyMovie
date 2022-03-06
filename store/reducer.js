import PRODUCTS from "../data/products";

const initState={
    products: PRODUCTS,
    favProducts: [],
    filterProducts: PRODUCTS
}
const reducer = (state= initState , action)=>{
    if (action.type==='ADD_TO_FAV')
    {
        const index=state.favProducts.findIndex(product=>product.id===action.productId)

        if(index>=0){
            const copy=[...state.favProducts]
            copy.splice(index, 1)
            return{...state, favProducts: copy}
        }
        else{
            const product=state.products.find(product=>product.id===action.productId)
            let copy=[...state.favProducts]
            copy =copy.concat(product)
            return{...state, favProducts: copy}
        }
    }
    return state
}
export default reducer;