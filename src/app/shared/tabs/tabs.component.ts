import { Component, OnInit } from '@angular/core';
import { IonTabs, IonTabButton, IonTabBar } from "@ionic/angular/standalone";
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { radio, library, search, playCircle } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonTabs, IonTabButton, IonTabBar, IonIcon],
})
export class TabsComponent  implements OnInit {

  constructor() {
    addIcons({ radio, library, search, playCircle });
   }

  ngOnInit() {}

}
