import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Products } from '../../providers/products';

/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController, public productsService: Products) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
