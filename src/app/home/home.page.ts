import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    HeaderComponent,
    RouterLink,
  ],
})
export class HomePage {
  constructor() {}
}
