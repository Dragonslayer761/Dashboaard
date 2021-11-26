import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerDeatialsComponent } from './Components/server-deatials/server-deatials.component';
import { StorageIndicatorComponent } from './Components/storage-indicator/storage-indicator.component';
import { ServerStatusComponent } from './Components/server-status/server-status.component';
import { UserBarComponent } from './Components/user-bar/user-bar.component';
import { AddModalComponent } from './Components/add-modal/add-modal.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ServerDeatialsComponent,
    StorageIndicatorComponent,
    ServerStatusComponent,
    UserBarComponent,
    AddModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
