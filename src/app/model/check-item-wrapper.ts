import { CheckBoxItem } from './check-box-item';

export class CheckItemWrapper {
    entity: string;
    checkedItems: CheckBoxItem[];

    constructor(entity: any, checkedItems: CheckBoxItem[]){
        this.entity = entity;
        this.checkedItems = checkedItems;
    }
}
