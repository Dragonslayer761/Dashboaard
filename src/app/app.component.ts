import { Component } from '@angular/core';
import { DashboardDetailsService } from './Services/dashboard-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bioinformusDashboard';
  serverDetails:any;
  filteredList:any;
  entryValue:any = 10;
  showModal:boolean =false;
  constructor(private dash:DashboardDetailsService){}
  ngOnInit(){
    this.getAllDetails();
    this.filteredList=this.serverDetails
  }
  getAllDetails(){
    this.dash.getServerDetails().subscribe(data =>{
      this.serverDetails = data['db'];
      this.filteredList=this.serverDetails
    })
  }
  searchDomain(event:any){
    let value= event.target.value.toLowerCase();
    this.filteredList = this.serverDetails.filter((e:any) => e.domain.toLowerCase().includes(value))
  }
  getEntries(event:any){
    console.log(event.target.value)
    let value = event.target.value
    if(value <= this.serverDetails.length){
      this.filteredList = this.serverDetails.slice(0,value)
      console.log(this.filteredList)
    }   
  }
  addServer(event:any){
  if(this.showModal){
    this.showModal=false;
  }else{
    this.showModal=true;
  }
  console.log(this.showModal)
  }
}
