import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-range',
  templateUrl: './time-range.component.html',
  styleUrls: ['./time-range.component.css']
})
export class TimeRangeComponent implements OnInit {

  private timeRange = [{ id: 1, value: '0-100', rng: { min: 0, max: 100 } },
  { id: 2, value: '100-200', rng: { min: 100, max: 200 } },
  { id: 3, value: '200-500', rng: { min: 200, max: 500 } },
  { id: 4, value: '500-1000', rng: { min: 500, max: 1000 } },
  { id: 5, value: '1000-1500', rng: { min: 1000, max: 1500 } }];

  private show = false;
  private selectedValue = 'Select Range';
  private minVal;
  private maxVal;
  meanVal: number;
  selectedTime: any;
  applyTime: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public toggle () {
    this.show = !this.show;
  }

  public selectedItem(e) {
    this.selectedValue = e.value;
    this.minVal = e['rng']['min'];
    this.maxVal = e['rng']['max'];
    this.selectedTime =  ((this.minVal + this.maxVal) / 2);
    this.toggle();
  }


  onSubmit() {
    if (!this.applyTime) {
      this.router.navigateByUrl('success');
    } else {
      setTimeout(() => {
      this.router.navigateByUrl('success');
      }, (this.selectedTime * 1000));
    }
  }
}
