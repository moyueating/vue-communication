import * as types from './mutation-types'
import Vue from 'vue'

export default {

    [types.ADD_TO_SHOPCART](state,payload){
        let allPro = [];        
        state.shopCartList.forEach( (pro) => {
            allPro.push(pro.name);
        })
        if(!payload.num && payload.num != 0){
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
    },
    [types.MINUS_TO_SHOPCART](state,payload){
        let popIndex;
        state.shopCartList.forEach( (pro,index) => {
            if(pro.name == payload.name){
                if(pro.num > 1){
                    pro.num -- ;
                    pro.totalPrice = pro.num * pro.price;
                }else{
                    popIndex = index;                    
                }
            }
        })
        popIndex == 0  && state.shopCartList.splice(popIndex,1);
        console.log(111);
    }


}