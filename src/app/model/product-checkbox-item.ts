import { last } from 'rxjs/operators';

export class ProductCheckboxItem {
    id : number;
    name: string;
    model: string;
    sub_model1: string;
    sub_model2: string;
    sub_model3: string;
    size: string;
    last_purchased_from: string;
    checked: boolean;

    constructor(id:any, name: any, model: any, sub_model1?: any,
        sub_model2?: any, sub_model3?: any, size?: any, last_purchased_from?: any, checked?: boolean) {
            this.id = id;
        this.name = name;
        this.model = model;
        this.sub_model1 = sub_model1 ? sub_model1 : "";
        this.sub_model2 = sub_model2 ? sub_model2 : "";
        this.sub_model3 = sub_model3 ? sub_model3 : "";
        this.size = size ? size : "";
        this.last_purchased_from = last_purchased_from ? last_purchased_from : "";
        this.checked = checked ? checked : false;
        // console.log("Model: "+model);
        
        
    }
}
