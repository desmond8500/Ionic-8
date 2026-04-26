import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,

 } from '@ionic/angular/standalone';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonButton,
    IonToolbar,
    IonButtons,
    IonTitle,
    RouterLink,
    IonHeader
  ]
})
export class HeaderComponent  implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit() {}

}
