import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormField, MatInputModule, MatSelectModule, MatOptionModule, MatCardModule, MatGridListModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUsersComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule,
    //MatFormField,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatGridListModule
  ],
  exports:[
    MatButtonModule, 
    MatCheckboxModule,
    //MatFormField,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
