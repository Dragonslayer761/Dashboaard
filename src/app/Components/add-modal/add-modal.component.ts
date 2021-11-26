import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {server} from './serverDataModel'

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  serverName:any;
  serverStorage:any;
  serverVisitor:any;
  subDomain:any=[];
  show:boolean=false;
  @Output() sendData = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
    this.subDomain.push('')
    if(this.subDomain.length>0){
      this.show=true
    }else{
      this.show=false
    }
  }
  addSubDomain(){
    this.subDomain.push('')
    console.log(this.subDomain)
  }
  enterName(event:any){
    this.serverName=event.target.value
  }
  enterStorage(event:any){
    this.serverStorage=event.target.value
  }
  enterVisitor(event:any){
    this.serverVisitor=event.target.value
  }
  deleteSubDomain(){
    this.subDomain.pop()
  }
  sendDataToServer(){
    if(this.subDomain.length ===1){
      if(this.subDomain[0]=== ""){
        this.subDomain=[]
      }
    }
    let server={
       "storage":Storage,
       "domain":this.serverName,
      " monthlyVisitorCapacity":Number(this.serverVisitor),
       "subdomain":this.subDomain
    }

    this.sendData.emit(server)
  }
}
