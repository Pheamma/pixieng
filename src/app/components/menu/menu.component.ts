import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  options: {"name": string, "action": string}[]= []
  constructor() { }

  ngOnInit(): void {
  }

}
