import { RouteHandler } from './router/store/router.handler';

//
// import { RouterState } from './shared/store/index';
import { RouterModule as RoutModule} from './router/router.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
// import { RouterHandler } from './shared/store/router.state';
import { RouterHandler } from './shared/store/router.handler';
//import { RouterState } from './router/store/state';

import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

//import { UsersComponent } from './user/containers/users.component';

//import { UsersComponent} from ''

// bootstrap
// routes
export const ROUTES: Route[] = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: 'users',
    loadChildren: './user/user.module#UserModule'
  }
];

function noop() {
  return function() {};
}

@NgModule({
  imports: [    
    RoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    NgxsModule.forRoot(),
   
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsRouterPluginModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [RouteHandler]
})
export class AppModule {}
