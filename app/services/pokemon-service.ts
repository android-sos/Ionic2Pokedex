import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx'

@Injectable()
export class PokemonService {
    
   private resource = 'build/data/pokemons.json'
            
    constructor(private http: Http) {
    }

     /**
     * Returns all Pokemon from the pokedex
     */
    
        getPokemons() {
            return this.http.get(this.resource)
                .map(res => res.json());
        }
    
    	getPokemonByName (name:string) {
		return Observable.create((observer) => {
			this.getPokemons()
				.subscribe(pokemons => {
					let pokemon = pokemons.filter((pokemon) => pokemon.name === name)
					observer.next(pokemon)
					observer.complete()	
				})
		}) 
	}
	
	getPokemonsByType (type:string) {
		return Observable.create((observer) => {
			this.getPokemons()
			.subscribe(pokemons => {
				let results = pokemons.filter(pokemon => pokemon.type.some(t => t === type ))
				observer.next(results)
				observer.complete()
			})
		})	
	}
	
	saveComment (pokemon, comment) {
		let comments = this.getComments(pokemon)
		
		comments.push(comment)
		localStorage.setItem(pokemon, JSON.stringify(comments))
	}
	
	getComments (pokemon) {
		var comments = localStorage.getItem(pokemon)
		if (!comments) 
			comments = []
		else
			comments = JSON.parse(comments)
		return comments
	}
    
}
