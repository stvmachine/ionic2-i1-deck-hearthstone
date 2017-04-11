import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { CardRestService } from '../../services/cardRest.service';

@Component({
  selector: 'page-deck',
  templateUrl: 'deck.html'
})
export class DeckPage {

  classNameUser:string;
  classCards: Array<any>= [];

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public cardRest: CardRestService) {

      this.classNameUser= this.params.get('className');

      this.cardRest.getCards().subscribe(response=>{
          let data= JSON.parse(response._body);
          this.classCards= data.cards.filter(c=> c.hero=== this.classNameUser).sort((n1,n2) => n1.mana - n2.mana)
          console.log(this.classCards);
      });
    }

}
