import {Page, NavController, Loading, Toast} from 'ionic-angular';
import { FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl } from 'angular2/common';
import {ListaCategorias} from '../listacategorias/listacategorias';

@Page({
  templateUrl: 'build/pages/login/login.html',
  directives: [FORM_DIRECTIVES]
})
export class LoginPage {
  
  authForm: ControlGroup;
  username: AbstractControl;
  password: AbstractControl;
  
  constructor(public nav: NavController,
              public fb: FormBuilder) 
    {
       this.authForm = fb.group({  
            'username': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
 
        this.username = this.authForm.controls['username'];     
        this.password = this.authForm.controls['password'];   
    }
    
  
  onSubmit(value: string): void { 
     console.log('Submitted value: ', value);
      if (value.username.length===0 && value.password.length===0){
        this.showToast('Inserte su Correo y Clave')
      }
      
      if(this.authForm.valid) {
         let loading = Loading.create({
              content: "Por favor, Espere.",
              duration: 2000,
              dismissOnPageChange: true
          });
          
          loading.onDismiss(() => {
              this.nav.setRoot(ListaCategorias);
          });
            
            this.nav.present(loading);
      }
    } 
  
   showToast(msg: string): void { 
    let toast = Toast.create({
      message: msg,
      duration: 3000
    });
    this.nav.present(toast);
  }
 
}
