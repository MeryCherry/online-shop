import { ShoppingCartItem } from './shopping-cart-item';

export class ShippingDetails {
name: string;
surname: string;
address: string;
city: string;
phone: string;
}

export class Order {
    dateCreated: number;
    productList: any[];

    constructor(public userID: string, cartItems: ShoppingCartItem[], public shippingDetails: ShippingDetails ) {
        this.dateCreated =  new Date().getTime();
        this.productList = cartItems.map( i => {
            return {
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            };
          });
    }
}
