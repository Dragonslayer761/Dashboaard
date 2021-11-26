import { Component, OnInit } from '@angular/core';
import {server} from './serverDataModel'

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  server!: server;
  constructor() { }

  ngOnInit(): void {
  }

}
