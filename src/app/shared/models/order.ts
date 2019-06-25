import { ShoppingCartItem } from './shopping-cart-item';
import { ShoppingCart } from './shopping-cart';

export class ShippingDetails {
name: string;
surname: string;
address: string;
city: string;
phone: string;
}

export interface IOrder {
  key: string;
  dateCreated: number;
  totalPrice: number;
  productList: any[];
  shippingDetails: ShippingDetails;
  }

export class Order {
    dateCreated: number;
    productList: any[];
    totalPrice: number;

    constructor(public userID: string, cart: ShoppingCart, public shippingDetails: ShippingDetails ) {
        this.dateCreated =  new Date().getTime();
        this.totalPrice = cart.totalPrice;
        this.productList = cart.items.map( i => {
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
