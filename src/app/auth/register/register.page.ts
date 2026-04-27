import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [HeaderComponent, IonContent , CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
