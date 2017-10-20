export default {
    expensive(state) {
        return state.shopCartList.filter(shop => {
            return shop.price > 2000
        })
    },
    moreExpensive(state,getters) {
        return getters.expensive.filter(shop => {
            return shop.price > 4000
        })
    }
}