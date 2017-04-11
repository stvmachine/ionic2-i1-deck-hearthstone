import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CardRestService {

  constructor(public http : Http){
    this.http= http;
  };

    getCards(){
      return this.openFile('cards/all-collectibles.json');
    }

    openFile(urlFile: string){
      return this.http.get(urlFile)
      .map(res => res)
      .catch(this.handleError);
    };

    handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    };

  }