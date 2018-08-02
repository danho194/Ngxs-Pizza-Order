import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app.component.scss'],
  template: `
  
    <div class="app">
        <div class="app__header">
        <p>NGXS Tester</p>
        <!--<img src="/assets/img/logo.svg" class="app__logo">-->
        </div>
        <div class="app__content">
        <div class="app__nav">
            <a routerLink="users" routerLinkActive="active">Users</a>
        </div>
        <div class="app__container">
            <router-outlet></router-outlet>
        </div>
        <div class="app__footer">
            <p>NGXS Tester</p>
        </div>
        </div>
    </div>  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
