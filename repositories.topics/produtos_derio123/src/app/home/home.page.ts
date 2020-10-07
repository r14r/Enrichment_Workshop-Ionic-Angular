import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { ProdutosService, Product } from '../services/produtos.service';
import { Router } from '@angular/router';
import { EditProductPage } from '../views/edit-product/edit-product.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any[] = [];
  onlyInactives: boolean = false;
  searchText: string = null;

  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              public router: Router,
              public modalCtrl: ModalController,
              private productServe: ProdutosService) {}

  ionViewDidEnter(){
   this.getAllProducts();
  }

  getAllProducts(){
    this.productServe.getAll(!this.onlyInactives,
                              this.searchText)
    .then((result: any[])=>{
      this.products = result;
    });  
  }                   

    async add(){
      const modal = this.modalCtrl.create({
        component: EditProductPage
      });

      return await modal.then(modal => modal.present());
    }

    async atProduct(id: number){
      const modal = this.modalCtrl.create({
        component: EditProductPage,
        componentProps: {id}
      });

      return await modal.then(modal => modal.present());
      //this.navCtrl.navigateRoot('/edit-product', id)
    }

    exProduct(product: Product){
      this.productServe.excluir(product.id)
      .then(() =>{
        //Removendo do array de produtos
        var i = this.products.indexOf(product);
        this.products.splice(i, 1);
        this.toastCtrl.create({
          message: 'Excluido com sucesso',
          duration: 2000
        }).then(toast => toast.present())
    })
    }
    //Filtra todos os produtos
    filterProducts(ev:any){
      this.getAllProducts();
    }
}
