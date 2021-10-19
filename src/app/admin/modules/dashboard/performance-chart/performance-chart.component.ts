import { Component, Input } from '@angular/core';

import { PerformanceChartData } from '../../../_models/dashboard';

@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.scss']
})
export class PerformanceChartComponent {
  @Input() performanceChartData: PerformanceChartData;
}
