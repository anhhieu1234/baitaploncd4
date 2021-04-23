import { Component, Injector, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from '../../lib/base-component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
  menus:any;
  total:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this._api.get('/api/loaisanpham/get-menu').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
    }); 
    this._cart.items.subscribe((res) => {
      this.total = res? res.length:0;
    });
  }

}
