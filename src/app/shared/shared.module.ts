import { DataService } from './services/api/data.service';
import { RouterHandler } from './store/router.handler';


import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';



@NgModule({
  declarations: [
   
    
  ],
  imports: [
    CommonModule,
    //NgxsModule.forFeature([RouterHandler]),
    HttpClientModule,
    
   
  ],
  exports: [ ],
  providers: [
    DataService,
    RouterHandler
  ]
})
export class SharedModule {}
