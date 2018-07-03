import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CardRestService } from '../../services/cardRest.service';

@Component({
  selector: 'page-deck',
  templateUrl: 'deck.html'
})
export class DeckPage {

  classNameUser: string;
  classCards: Array<any> = [];
  neutralCards: Array<any> = [];

  choosenCards: Array<any> = [];

  cards: string;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public cardRest: CardRestService) {

    this.classNameUser = this.params.get('className');

    this.cards = 'card_class';

    this.cardRest.getCards().subscribe(response => {
      let data = JSON.parse(response._body);
      this.classCards = data.cards.filter(c => c.hero === this.classNameUser)
        .sort((n1, n2) => n1.mana - n2.mana)
        .map((c) => { c.count = 0; return c; });
      this.neutralCards = data.cards.filter(c => c.hero === 'neutral')
        .sort((n1, n2) => n1.mana - n2.mana)
        .map((c) => { c.count = 0; return c; });
    });
  }

  addDeck(card) {
    let plusCard = card.hero === 'neutral' ? this.neutralCards.find(c => c.id === card.id) : this.classCards.find(c => c.id === card.id);
    if (plusCard.count < 2) {
      plusCard.count++; //llamado por referencia

      if (!this.choosenCards.find(c => c.id === card.id)) {
        this.choosenCards.push(plusCard);
        this.choosenCards = this.choosenCards.sort((n1, n2) => n1.mana - n2.mana);
      }
    }
  }

  removeDeck(card) {
    let plusCard = card.hero === 'neutral' ? this.neutralCards.find(c => c.id === card.id) : this.classCards.find(c => c.id === card.id);

    if (plusCard.count > 0) {
      plusCard.count--;

      if (plusCard.count === 0) {
        const indexCard = this.choosenCards.findIndex(c => c.id === card.id);
        if (indexCard > -1) {
          this.choosenCards.splice(indexCard , 1);
        }

      }
    }
  }

}
