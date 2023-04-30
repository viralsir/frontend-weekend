import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit{
  items: MenuItem[]=[];

  ngOnInit(){
    this.items = [
      {
        label: 'Course',
        icon: 'pi pi-bookmark-fill',

        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink:'new',

          },
          {
            label: 'View',
            icon: 'pi pi-eye',
            routerLink:'view',
          },


        ]
      },
      {
        label: 'Student',
        icon: 'pi pi-user',

        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink:'new',

          },
          {
            label: 'View',
            icon: 'pi pi-fw pi-trash',
            routerLink:'view',
          },


        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];

  }

}
