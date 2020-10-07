import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from './services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dbServe: DatabaseService,
    private toast: ToastController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.dbServe.createDatabase()
      .then(() =>{
        //fechando a splash quando o banco for criado
        this.router.navigate(['home']);
        this.toast.create({ 
          message: 'Sucesso, banco criado!!',
          duration: 500
        })
      })
      .catch(()=> {
        //Se houver erro na criação do banco
        this.toast.create({ 
          message: 'Erro ao criar o banco',
          duration: 500});
      })
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
