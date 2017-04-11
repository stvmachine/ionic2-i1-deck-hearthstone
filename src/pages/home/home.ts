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
      { className: 'warrior', image: '/images/garrosh.png' },
      { className: 'shaman', image: '/images/thrall.png' },
      { className: 'rogue', image: '/images/valeera.png' },
      { className: 'paladin', image: '/images/uther.png' },
      { className: 'hunter', image: '/images/rexxar.png' },
      { className: 'druid', image: '/images/malfurion.png' },
      { className: 'warlock', image: '/images/guldan.png' },
      { className: 'mage', image: '/images/jaina.png' },
      { className: 'priest', image: '/images/anduin.png' }
    ];
  }

  chooseClass(hero: {className:string, image: string}){
    this.navCtrl.push(DeckPage, {

    });
  }

}
