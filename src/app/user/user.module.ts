import { RouteHandler } from './../router/store/router.handler';
import { ApiService } from './services/api.service';

import { UsersGuard, UserExistsGuard } from './store/guard';
import { UsersComponent } from './containers/users/users.component';
import { UserDetailsComponent } from './containers/user.details/user.details.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './store';
import { DataService } from '../shared/services';
import { RouterModule as RModule} from '../router/router.module';



const ROUTES: Route[] = [
  {
    path: '',
    canActivate: [UsersGuard],
    component: UsersComponent
  },

  {
    path: ':userId',
    canActivate: [UserExistsGuard],
    component: UserDetailsComponent
  }
];
@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgxsModule.forFeature(UsersState),
    HttpClientModule,
    ReactiveFormsModule, 
    RModule,
    
  ],
  providers: [
    DataService,
    UsersGuard,
    UserExistsGuard,
    RouteHandler
  ]
})
export class UserModule {}
