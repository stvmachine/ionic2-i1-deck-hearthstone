import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeckPage } from '../deck/deck';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  heroes:Array<{className:string, image: string}>;
  constructor(public navCtrl: NavController) {
    this.heroes=[
      { className: 'warrior', image: '/assets/images/garrosh.png' },
      { className: 'shaman', image: '/assets/images/thrall.png' },
      { className: 'rogue', image: '/assets/images/valeera.png' },
      { className: 'paladin', image: '/assets/images/uther.png' },
      { className: 'hunter', image: '/assets/images/rexxar.png' },
      { className: 'druid', image: '/assets/images/malfurion.png' },
      { className: 'warlock', image: '/assets/images/guldan.png' },
      { className: 'mage', image: '/assets/images/jaina.png' },
      { className: 'priest', image: '/assets/images/anduin.png' }
    ];
  }

  chooseClass(className:string){
    this.navCtrl.push(DeckPage, {
      'className': className
    });
  }

}
