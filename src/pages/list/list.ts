import { Component } from '@angular/core';
import {ActionSheetController, NavController,LoadingController,ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http} from "@angular/http";
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  grid: Array<string>;
  filterDB:string;
  constructor(public events: Events, public alertCtrl: AlertController, public http: Http, public storage: Storage, public navCtrl: NavController, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController) {

  }

  filter(){

    this.http.get("http://localhost:3500/filterdb/"+this.filterDB).subscribe(data => {
      this.grid = Array(data.json().length);
      for(let i=0;i<data.json().length;i++) {
        this.grid[i] = data.json()[i]
      }

    }, error => {
      console.log("error")
    });

  }

}
