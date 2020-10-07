import { Component, OnInit } from '@angular/core';
import { Product, ProdutosService } from 'src/app/services/produtos.service';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  model: Product;
  categories: any[];

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private productServe: ProdutosService,
    private categoryServe: CategoriasService
  ) {
    this.model = new Product();
    if (this.navParams.data.id) {
      this.productServe.get(this.navParams.data.id)
      .then((result: any) =>{
        this.model = result;
      })
    }
  }

  ngOnInit() {
  }

  ionViewDidLoad(){
   this.categoryServe.getALL()
   .then((result: any[]) =>{
     this.categories = result;
   }).catch(() =>{
     this.toast.create({message: 'Erro ao carregar as categorias.', 
    duration: 3000, position: 'middle'}).then(toast => toast.present());
   });
  }

  salvar() {
    this.saveProduct()
    .then(() =>{
      this.toast.create({
        message: 'Produto salvo',
        duration: 3000,
        position: 'middle'
      }).then(toast => toast.present());
    }).catch(()=> {
      this.toast.create({ 
        message: 'Erro ao salvar o produto',
        duration: 3000,
        position:  'middle'
      }).then(toast => toast.present());
    } )
  }

  private saveProduct() {
    if (this.model.id) {
      return this.productServe.Atualiza(this.model);
    } else {
      return this.productServe.add(this.model);
    }
  }
}
