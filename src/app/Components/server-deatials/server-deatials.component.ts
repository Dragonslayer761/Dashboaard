import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-deatials',
  templateUrl: './server-deatials.component.html',
  styleUrls: ['./server-deatials.component.scss']
})
export class ServerDeatialsComponent implements OnInit {
  @Input() serverDetails:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.serverDetails)
  }

}
