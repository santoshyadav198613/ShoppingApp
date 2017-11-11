import {
  Component, OnInit, Input, Output, EventEmitter,
  OnChanges, SimpleChanges , ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../service/user/user';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class UserdetailComponent implements OnInit, OnChanges {
userData:User[];
  isVisible = true;
  constructor(private _router: ActivatedRoute) { }

  ngOnChanges(obj: SimpleChanges) {
    console.log(obj);
  }

  ngOnInit() {
    this._router.data.subscribe((data) => this.userData = data['userDetails']);
    console.dir(this.userData);
  }

/*  hideClick() {
    this.onHide.emit(true);
    this.isVisible = !this.isVisible;
  }
  */

}
