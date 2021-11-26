import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-storage-indicator',
  templateUrl: './storage-indicator.component.html',
  styleUrls: ['./storage-indicator.component.scss']
})
export class StorageIndicatorComponent implements OnInit {
  @Input() usedStorage :any;
  @Input() totalStorage:any;
  @Input() id:any;
  public width:any;
  constructor() { }

  ngOnInit(): void {
   
    console.log(this.usedStorage,this.totalStorage)
    this.width=(Number(this.usedStorage.replace('gb',''))/Number(this.totalStorage.replace('gb','')))*100
    console.log(this.width)
  }
  ngAfterViewInit(){
   
  }

}
