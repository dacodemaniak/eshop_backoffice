import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

import { Shop } from '@app/dashboard/models/shop';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  public shopList: Array<Shop>;

  constructor(private shopService: AdminService) {

  }

  ngOnInit() {
    this.shopService.getShops().subscribe((response) => {
      if (response.status === 200) {
        const shopList: Array<Shop> = response.get('body');
      } else {
        this.shopList = [];
      }
      console.log('Boutiques : ' + this.shopList.length);
    });
  }

}
