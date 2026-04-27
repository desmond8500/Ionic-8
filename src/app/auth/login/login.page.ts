import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent,IonList, IonLabel, IonItem, IonInput, IonToggle, IonNote, IonTabButton, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonTabButton, IonNote, IonToggle, IonInput, HeaderComponent, IonContent, CommonModule,
    FormsModule,
    IonLabel, IonItem, ReactiveFormsModule, IonList, RouterLink
  ],
})
export class LoginPage implements OnInit {
  fb = inject(FormBuilder);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor() {}

  ngOnInit() {}
}
