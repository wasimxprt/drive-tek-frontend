import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrandService } from '../../_services/brand/brand.service';
import { Brand } from '../../_models/brand.model';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

import { ConfirmDialogModel, ConfirmdialogComponent } from '../../shared/components/confirmdialog/confirmdialog.component';
import { MatDialog } from '@angular/material/dialog';


export interface BrandElement {
  title: string;
  description: string;
}

const ELEMENT_DATA: BrandElement[] = [
];

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  tutorials?: Brand[];
  currentTutorial?: Brand;
  currentIndex = -1;
  title = '';
  result: string = '';

  constructor(private brandService: BrandService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  confirmDialog(id): void {

    const message = `Are you sure you want to delete this record?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmdialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;

      if (dialogResult) {
        this.deleteBrand(id)
      }
    });
  }

  addBrand() {
    this.router.navigate(['/admin/brand/add']);
  }

  editBrand(id) {
    this.router.navigate(['/admin/brand/edit', id]);
  }

  deleteBrand(id) {
    this.brandService.delete(id).subscribe(
      data => {
        this.dataSource = new PostDataSource(this.brandService);
      },
      err => {

      }
    );
  }

  displayedColumns = ['title', 'description', "status", "actions"];
  dataSource = new PostDataSource(this.brandService);

}

export class PostDataSource extends DataSource<any> {
  constructor(private brandService: BrandService) {
    super();
  }

  connect(): Observable<Brand[]> {
    return this.brandService.getAll();
  }

  disconnect() {
  }
}
