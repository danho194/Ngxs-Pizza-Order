import { Select, Store } from '@ngxs/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user.details',
  templateUrl: './user.details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user.details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
