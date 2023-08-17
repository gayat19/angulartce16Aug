import { CartProduct } from "../models/cartproduct";

export class CartService{
    cartProducts:CartProduct[];

    constructor(){
        this.cartProducts =[];
    }

    getCartDetails():CartProduct[]{
        return this.cartProducts;
    }

    addToCart(cartProduct:CartProduct){
        this.cartProducts.push(cartProduct);
    }
}