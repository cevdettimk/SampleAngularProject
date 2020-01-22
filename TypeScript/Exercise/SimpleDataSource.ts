import { Product } from "./Product";

 export class SimpleDataSource {
    private products : Array<Product>;
    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Samsung S5","Telefon1",1000),
            new Product(2,"Samsung S6","Telefon2",2000),
            new Product(3,"Samsung S7","Telefon3",3000),
            new Product(4,"Samsung S8","Telefon4",4000),
        );
    }

    getProducs() : Product[] {
        return this.products;
    }
}

