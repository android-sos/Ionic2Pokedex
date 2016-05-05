import {IonicApp, Page, NavController} from 'ionic-angular';
import {CategoriaService} from '../../services/categoriaservice';

@Page({
  templateUrl: 'build/pages/listacategorias/listacategorias.html',
  providers: [CategoriaService]
})

export class ListaCategorias {
  items = []
  searchQuery: string = '';
  findBy: string = 'especialidad';


  constructor(
    public app: IonicApp,
    public nav: NavController,
    public service: CategoriaService
  ) {

  }

  onPageDidEnter(): void {
    this.service.all()
      .subscribe(items => {
        this.items = items
      })
  }

  getItems(event, key) {
    if (event.value.length > 2) {
     console.log(event)
    }
  }

  getItems2(searchbar) {
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
