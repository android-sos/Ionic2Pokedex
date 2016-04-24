import {Page, NavParams, NavController, ViewController} from 'ionic-angular';
import Loader from '../loader/loader';

@Page({
    templateUrl: 'build/pages/detallepokemon/detallepokemon.html',
    directives: [Loader]
})

export class DetallePokemon {

    // the pokemon we're displaying
    private pokemon;

    constructor(
        public params: NavParams,
        public nav: NavController,
        public viewCtrl: ViewController
    ) { }

    onPageDidEnter(): void {
        //console.log(this.params.get('pokemon'))
        this.pokemon = this.params.get('pokemon')
    }

    goToEvolution(evolution): void {
        
    }

    goToMove(move): void {
        
    }

}
