import PRODUCTS from "../data/products";

const initState={
    products: PRODUCTS,
    favProducts: [],
    cartProducts: [],
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
    if (action.type==='ADD_TO_CART')
    {
        const index=state.cartProducts.findIndex(product=>product.id===action.productId)

        if(index>=0){
            const copy=[...state.cartProducts]
            copy.splice(index, 1)
            return{...state, cartProducts: copy}
        }
        else{
            const product=state.products.find(product=>product.id===action.productId)
            let copy=[...state.cartProducts]
            copy =copy.concat(product)
            return{...state, cartProducts: copy}
        }
    }
    if(action.type==='FILTER_PRODUCTS')
    {
        const filters= action.filters

        const products= state.products.filter(product=>{
            if(filters.isBrandNew != product.isBrand)
            {
                return false
            }
            if(filters.isSale != product.isSale)
            {
                return false
            }
            return true
        })
        return {...state, filterProducts: products}
    }
    return state
}
export default reducer;