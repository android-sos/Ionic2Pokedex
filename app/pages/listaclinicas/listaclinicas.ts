import {Page, NavController} from 'ionic-angular';
import {ClinicasService} from '../../services/clinicasservice';

@Page({
  templateUrl: 'build/pages/listaclinicas/listaclinicas.html',
  providers: [ClinicasService]
})

export class ListaClinicas {
  items = []
  searchQuery: string = '';
   
  constructor(
    public nav: NavController,
    public service: ClinicasService
  ) 
  {}
 
  onPageDidEnter(): void {
      this.service.all()
    .subscribe(items => {
      this.items = items
    })
  }

  getItems(searchbar) {
    this.service.all()
    .subscribe(items => {
        this.items = items
        var q = searchbar.value;
        
        if (q.trim() == '') {
          return;
        }
        
        this.items = this.items.filter((v) => {
          if (v.descripcion.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        })
     })
    }
    
    goToDetail(pokemon): void {
       console.log('hola')
    }
    
    do_select_findBy(fb): void {
       this.items = []
       console.log(fb.value)
    }
    
}
