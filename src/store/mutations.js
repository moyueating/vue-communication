import * as types from './mutation-types'
import Vue from 'vue'

export default {

    [types.ADD_TO_SHOPCART](state,payload){
        let allPro = [];        
        state.shopCartList.forEach( (pro) => {
            allPro.push(pro.name);
        })
        if(!payload.num){
            Vue.set(payload,'num',1);
        }
        if(!payload.totalPrice){
            Vue.set(payload,'totalPrice',payload.price);
        }

        if(allPro.indexOf(payload.name) < 0){
            state.shopCartList.push(payload);
        }else{
            state.shopCartList.forEach( (pro) => {
                if(pro.name == payload.name){
                    pro.num ++ ;
                    pro.totalPrice = pro.num * pro.price;
                }
            })
        }
        console.log('this is add to shop cart!');
    }


}