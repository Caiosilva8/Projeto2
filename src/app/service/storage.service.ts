import { Injectable } from "@angular/core";
import { Pedido } from '../model/pedido';

@Injectable()
export class StorageService {


    setCart(obj: Pedido) {
        localStorage.setItem('carrinho', JSON.stringify(obj));
    }

    getCart(): Pedido {
        let p = new Pedido();

        let str = localStorage.getItem("carrinho");

        if(str!=null){
            return JSON.parse(str);
        }else{
            return null;
        }
    }
}