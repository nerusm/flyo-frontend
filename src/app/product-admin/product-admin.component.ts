import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from '../model/supplier';
import { SupplierService } from '../service/supplier.service';
import { Sport } from '../model/sport';
import { SportService } from '../service/sport.service';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { format } from 'util';
import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AlertService } from '../_alert';
import { CheckBoxItem } from "../model/check-box-item";
import { CheckItemWrapper } from "../model/check-item-wrapper";
import { UploadService } from "../service/upload.service";
import { ProductService } from "../service/product.service";
import { ProductCheckboxItem } from "../model/product-checkbox-item";
import { ProductCheckboxItemWrapper } from "../model/product-checkbox-item-wrapper";
import { Product } from "../model/product";
import { element } from 'protractor';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})

export class ProductAdminComponent implements OnInit {
  reactiveForm: FormGroup = new FormGroup({
    checked: new FormControl(true),
    unChecked: new FormControl(false)
  })
  suppliers: Supplier[];
  supplier: Supplier;
  sports: Sport[];
  sport: Sport;
  products: Product[];
  product: Product;
  s: Supplier;
  sup: SupplierService;
  sportsListItems = new Array<CheckBoxItem>();
  suppliersListItems = new Array<CheckBoxItem>();
  productsCheckedItems = new Array<ProductCheckboxItem>();
  checkedItemWrapper: CheckItemWrapper;

  productCheckBoxItem: ProductCheckboxItem;
  prodCheckedItems = new Array<CheckBoxItem>();
  checkedProdItemWrapper: CheckItemWrapper;
  form: FormGroup;
  error: string;
  uploadResponse = { status: '', message: '', filePath: '' };



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService,
    private sportService: SportService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    private productService: ProductService) {
    this.sup = supplierService;
    this.supplier = new Supplier();
    this.sport = new Sport();
    this.s = new Supplier();
    this.sportsListItems = new Array<CheckBoxItem>();
    this.suppliersListItems = new Array<CheckBoxItem>();
    this.productsCheckedItems = new Array<ProductCheckboxItem>();
    
  }

  onSportSubmit(myForm) {
    var isSportExists = false;
    var sportNameForm = this.sport.sportName.toLowerCase();
    console.log("Sportname: " + sportNameForm);
    this.sport.sportName = this.sport.sportName.toUpperCase();
    this.sports.every(function (value) {
      if (value.sportName.toLowerCase() == sportNameForm.toLowerCase()) {
        console.log("Sport name already exists: " + sportNameForm);
        isSportExists = true;
        return false;
      } else {
        return true;
      }
    });

    if (!isSportExists) {
      console.log("Saving sport");
      this.sportService.save(this.sport).subscribe(result => this.ngOnInit());
      this.alertService.success("Sport added: " + sportNameForm);
    } else {
      console.log("Already exists");
      this.alertService.error("Sport already exists: " + sportNameForm);
    }
    myForm.reset();
  }

  onSubmit(myForm) {
    this.s = this.supplier;
    console.log("Sup:" + this.s.name);
    var name = this.supplier.name;
    var isExists = false;
    this.supplier.name = this.supplier.name.toUpperCase();
    this.supplier.location = this.supplier.location.toUpperCase();
    this.suppliers.every(function (value) {
      if (value.name.toUpperCase() == name.toUpperCase()) {
        console.log("Supplier name already exists: " + name);
        isExists = true;
        return false;
      }
      return true;
    });

    if (!isExists) {
      this.supplierService.save(this.supplier).subscribe(result => this.ngOnInit());
      this.alertService.success("Supplier Added: " + name);
    } else {
      this.alertService.error("Supplier already exists: " + name);
    }
    myForm.reset();
  }

  getCheckboxesValue() {
    console.log('Checked value:', this.reactiveForm.controls['checked'].value);
    console.log('Unchecked value:', this.reactiveForm.controls['unchecked'].value);
  }

  onToggle() {

    this.sportsListItems.forEach(element => {
      console.log(element.label + ":" + element.checked);

    });

    console.log("******");


  }

  onSportDelete() {
    console.log("^^^^^^^^");
    this.checkedItemWrapper = new CheckItemWrapper("SPORT", this.sportsListItems.filter(x => x.checked));
    console.log("Calling delete for entity: " + this.checkedItemWrapper.entity);
    this.sportService.delete(this.checkedItemWrapper).subscribe(result => this.ngOnInit());

  }

  onSupplierDelete() {
    console.log("***************");
    this.checkedItemWrapper = new CheckItemWrapper("SUPPLIER", this.suppliersListItems.filter(x => x.checked));
    console.log("Calling delete for entity: " + this.checkedItemWrapper.entity);
    this.sportService.delete(this.checkedItemWrapper).subscribe(result => this.ngOnInit());

  }

  onProductDelete(){
    // this.productsCheckedItems = this.productsCheckedItems.filter(x => x.checked);
   this.prodCheckedItems = this.productsCheckedItems.filter(x=>x.checked).map(
     element => new CheckBoxItem(element.id, element.name)
   );

   this.checkedProdItemWrapper = new CheckItemWrapper("PRODUCT", this.prodCheckedItems);
    
    this.sportService.delete(this.checkedProdItemWrapper).subscribe(result => this.ngOnInit());  
    console.log("*** On Product Delete");
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onFileUploadSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('avatar').value);

    this.uploadService.upload(formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );

    console.log("Upload Status: "+this.uploadResponse.status);
    
  }

  ngOnInit() {
    this.sup.findAll().subscribe(data => {
      this.suppliers = data;
      this.suppliersListItems = this.suppliers.map(x => new CheckBoxItem(x.name, x.name, x.location));
      console.log("Supplier: " + this.suppliersListItems);

    });
    this.sportService.findAll().subscribe(data => {
      this.sports = data;
      this.sportsListItems = this.sports.map(x => new CheckBoxItem(x.sportName, x.sportName));
      console.log("User: " + this.sportsListItems);

    });

    this.productService.findAll().subscribe(data => {
      this.products = data;
      // console.log("Data: "+data);
      // console.log("Prod: " + this.products.toString());

      this.productsCheckedItems = this.products.map(prod => new ProductCheckboxItem(prod.id, prod.name, prod.model,
        prod.subModel1, prod.subModel2, prod.subModel3, prod.size, "", false));
        
        // this.productsCheckedItems.forEach(element => {
        //   console.log("Prods Size: " + element.model);  
        // });
    });

    


    this.form = this.formBuilder.group({
      avatar: ['']
    });
  }

}
