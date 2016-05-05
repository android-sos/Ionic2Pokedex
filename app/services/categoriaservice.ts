import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx'

 
@Injectable()
export class CategoriaService {
    
   private resource = 'build/data/data_profesionales.json'
            
    constructor(public http: Http) {
		this.http = http
    }

     /**
     * Returns all Pokemon from the pokedex
     */
    
        all() {
            return this.http.get(this.resource)
                .map(res => res.json());
        }
		
    	itemsByDescription (descripcion) {
			return Observable.create((observer) => {
			this.all()
				.subscribe(items => {
					let item = items.filter((item) => item.descripcion === descripcion)
					console.log(item)
					observer.next(item)
					observer.complete()	
				})
			}) 
		}
	
		itemsByEspciality (find:string) {
			return Observable.create((observer) => {
				this.all()
				.subscribe(items => {
					let results = items.filter(item => item.especialidades.some(t => t === find ))
					observer.next(results)
					observer.complete()
				})
			})	
		}
}
