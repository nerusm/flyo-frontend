import { ProductCheckboxItem } from "./product-checkbox-item";
export class ProductCheckboxItemWrapper {
    checkedProducts: ProductCheckboxItem[];

    constructor(checkedProducts: ProductCheckboxItem[]){
        this.checkedProducts = checkedProducts;
    }
}
