import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { BrandService } from '../../../_services/brand/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brandForm: FormGroup;
  loading = false;
  isFailed = false;
  isSuccess = false;
  isSubmitted = false;
  errorMessage = '';


  constructor(public formBuilder: FormBuilder, private brandService: BrandService) { }

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.brandForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.brandForm.controls[control].hasError(error);
  }

  submitForm() {


    if (this.brandForm.invalid) {
      return;
    }

    this.loading = true;
    this.isSubmitted = true;

    this.brandService.create(this.brandForm.value).subscribe(
      data => {
        console.log("Success", data);
        this.isSuccess = true;
        this.loading = false;
      },
      err => {
        this.isFailed = true;
        console.log("Fail", err);
        this.loading = false;
      }
    );
  }

}
