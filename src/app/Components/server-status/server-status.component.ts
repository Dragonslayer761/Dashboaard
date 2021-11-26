import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.scss']
})
export class ServerStatusComponent implements OnInit {
  @Input() status:any;
  constructor() { }

  ngOnInit(): void {
  }

}
