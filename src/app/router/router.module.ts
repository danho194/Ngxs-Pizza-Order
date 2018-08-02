import { RouterHandler } from './../shared/store/router.handler';
//import { RoutersState } from './store';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
// import { Navigate, Navigated } from './store/state';
// import { RoutersState } from './store';

@NgModule({  
  imports: [   
    //NgxsModule.forFeature([RouterState]),
  ],  providers: [
    RouterHandler
  //  Navigate, Navigated, RouterState
  ]
})
export class RouterModule {}
