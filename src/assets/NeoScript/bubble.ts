import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Http } from '@angular/http';
declare var window: any;
declare let cordova: any;

@Component({
  selector: 'page-bubble',
  templateUrl: '../NeoScript/bubble.html',
  providers: [InAppBrowser]
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
import { ActionSheetController } from 'ionic-angular';

export class MyPage {
  constructor(public actionSheetCtrl: ActionSheetController) {
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
