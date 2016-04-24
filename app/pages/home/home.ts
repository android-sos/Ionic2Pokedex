import {Page, NavController} from 'ionic-angular';
import {ListaPokemon} from '../listapokemon/listapokemon';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public nav: NavController) {

  }
  
  mostraLista1(): void {
    this.nav.setRoot(ListaPokemon) 
    console.log('hola')
  }
  
  mostraLista2(): void {
    this.nav.setRoot(ListaPokemon) 
    console.log('hola')
  }
  
  
}
