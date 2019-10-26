export class CheckBoxItem {
    value: string;
    label: string;
    label2: string;
    checked: boolean;
    entity: string;

    constructor(value: any, label: any, label2?: any, checked?: boolean,  entity?: any) {
        this.value = value;
        this.label = label;
        this.label2 = label2 ? label2 : "";
        this.checked = checked ? checked : false;
        this.entity = entity ? entity : "";
    }
}
