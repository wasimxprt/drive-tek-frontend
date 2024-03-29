import { Component, OnInit } from '@angular/core';

import { DataService } from '../../_services/data/data.service';
import { DashboardService } from '../../_services/dashboard/dashboard.service';
import { Post } from '../../_interface/Post';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

import {
  DailyLineChartData,
  VisitsChartData,
  PerformanceChartData,
  RevenueChartData,
  ServerChartData,
} from '../../_models/dashboard';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  public visitsChartData$: Observable<VisitsChartData>;
  public performanceChartData$: Observable<PerformanceChartData>;
  public revenueChartData$: Observable<RevenueChartData>;
  public serverChartData$: Observable<ServerChartData>;
  public dailyLineChartData$: Observable<DailyLineChartData>;

  constructor(private dataService: DataService, private dashboardService: DashboardService) {
    this.visitsChartData$ = this.dashboardService.loadVisitsChartData();
    this.performanceChartData$ = this.dashboardService.loadPerformanceChartData();
    this.revenueChartData$ = this.dashboardService.loadRevenueChartData();
    this.serverChartData$ = this.dashboardService.loadServerChartData();
    this.dailyLineChartData$ = this.dashboardService.loadDailyLineChartData();
  }

  ngOnInit(): void {
    console.log("called dash");
  }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);


}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}

