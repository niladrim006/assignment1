import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TimeRangeComponent } from './time-range/time-range.component';
import { SuccessComponent } from './success/success.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', component: TimeRangeComponent },
  { path: 'success', component: SuccessComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TimeRangeComponent,
    SuccessComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
  FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
