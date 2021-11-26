import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {
  @Input() monthlyVisitor:any;
  @Input() monthlyVisitorCapacity:any;
  totalPercent:any;
  angleValue:any;
  constructor() { }

  ngOnInit(): void {
    this.totalPercent = ((this.monthlyVisitor/this.monthlyVisitorCapacity)*100)*100/100
    this.angleValue = (360/100)*this.totalPercent;
    console.log(this.angleValue)
  }

}
