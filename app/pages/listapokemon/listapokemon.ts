import {Page, NavController} from 'ionic-angular';
import {PokemonService} from '../../services/pokemon-service';
import {DetallePokemon} from '../detallepokemon/detallepokemon';

@Page({
  templateUrl: 'build/pages/listapokemon/listapokemon.html',
  providers: [PokemonService]
})

export class ListaPokemon {
  pokemons = []
  searchQuery: string = '';
   
   
  constructor(
    public nav: NavController,
    public service: PokemonService
  ) { 
    // Aqui tambien podemos cargar las lista de pokemones
    // pero la gregue en un evento para aprendizaje
  }
 
  onPageDidEnter(): void {
      this.service.getPokemons()
    .subscribe(pokemons => {
      this.pokemons = pokemons
     // console.log(pokemons)
    })
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.service.getPokemons()
    .subscribe(pokemons => {
        this.pokemons = pokemons
        var q = searchbar.value;
        
        if (q.trim() == '') {
          return;
        }
        
        this.pokemons = this.pokemons.filter((v) => {
          if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        })
     })
    }
    
     goToDetail(pokemon): void {
       console.log('hola')
        this.nav.push(DetallePokemon, {
            pokemon: pokemon
        });
    }
    
}
