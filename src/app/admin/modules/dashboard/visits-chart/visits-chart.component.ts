import { Component, Input } from '@angular/core';

import { VisitsChartData } from '../../../_models/dashboard';
import { colors } from '../../../_consts';

@Component({
  selector: 'app-visits-chart',
  templateUrl: './visits-chart.component.html',
  styleUrls: ['./visits-chart.component.scss']
})
export class VisitsChartComponent {
  @Input() visitsChartData: VisitsChartData;
  public colors: typeof colors = colors;
}
