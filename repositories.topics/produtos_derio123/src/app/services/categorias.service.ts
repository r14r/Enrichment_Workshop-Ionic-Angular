import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private dbServe: DatabaseService) { }

  /**
   * getALL
   * Pega todos as categorias
   */
  public getALL() {
    return this.dbServe.getDB()
    .then((db: SQLiteObject) =>{
      return db.executeSql('select * from categorias', [])
      .then((data: any) =>{
        if (data.rows.length > 0) {
          let categories: any[] = [];
          for (var i = 0; i < data.rows.length; i++) {
            var category = data.rows.item(i);
            categories.push(category);
          }
          return categories;
        } else {
          return [];
        }
      }).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }
}
