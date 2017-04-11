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
  neutralCards: Array<any>= [];

  cards: string;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public cardRest: CardRestService) {

      this.classNameUser= this.params.get('className');

      this.cards='card_class';

      this.cardRest.getCards().subscribe(response=>{
          let data= JSON.parse(response._body);
          this.classCards= data.cards.filter(c=> c.hero=== this.classNameUser).sort((n1,n2) => n1.mana - n2.mana);
          this.neutralCards= data.cards.filter(c=> c.hero=== 'neutral').sort((n1,n2) => n1.mana - n2.mana);
      });
    }

}
