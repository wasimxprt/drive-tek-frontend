import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../_services/brand/brand.service';
import { Brand } from '../../_models/brand.model';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

export interface BrandElement {
  title: string;
  description: string;
}

const ELEMENT_DATA: BrandElement[] = [
];

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  tutorials?: Brand[];
  currentTutorial?: Brand;
  currentIndex = -1;
  title = '';

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    
  }

  displayedColumns = ['title', 'description'];
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
