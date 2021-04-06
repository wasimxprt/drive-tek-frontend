import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BrandService } from '../../../_services/brand/brand.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  brandForm: FormGroup;
  _id = '';
  loading = false;
  isFailed = false;
  isSuccess = false;
  isSubmitted = false;
  errorMessage = '';

  constructor(private router: Router, private route: ActivatedRoute, public formBuilder: FormBuilder, private brandService: BrandService) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    // });

    this.getBrandId(this.route.snapshot.params.id);
    this.brandForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    });

  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.brandForm.controls[control].hasError(error);
  }

  getBrandId(id: any) {
    this.brandService.get(id).subscribe((data: any) => {

      this._id = data.id;
      this.brandForm.setValue({
        title: data.title,
        description: data.description
      });
    });
  }


  submitForm() {

    if (this.brandForm.invalid) {
      return;
    }

    this.loading = true;
    this.isSubmitted = true;

    this.brandService.update(this._id, this.brandForm.value).subscribe(
      data => {
        this.isSuccess = true;
        this.loading = false;
        this.router.navigate(['/admin/brand']);
      },
      err => {
        this.isFailed = true;
        this.loading = false;
      }
    );
  }

}
