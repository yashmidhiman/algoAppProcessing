import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-bubble',
  templateUrl: 'bubble.html'
})

export class BubblePage {
  @ViewChild('canvas') canvasEl : ElementRef;
  private _CANVAS : any;
  private _CONTEXT : any;
  constructor(public navCtrl: NavController) {

  }
  }

  