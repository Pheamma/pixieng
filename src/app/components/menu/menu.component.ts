import { Component, OnInit } from '@angular/core';
import menuOptions from '../../../assets/json/menuOptions.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  options: {"name": string, "subOptions": {}}[]= [];
  subMenuHidden : boolean[] = [];
  subOptions: {"mainMenuName": string, "name": string, "action": string}[] = [];

  constructor() { }

  ngOnInit(): void {
    menuOptions.options.forEach(o => {
      this.options.push({"name": o.name, "subOptions": o.subOptions});
      o.subOptions.actions.forEach(s => {
        this.subOptions.push({"mainMenuName": o.name,"name": s.name, "action": s.action});
      });
      this.subMenuHidden.push(true);
    });
  }

  openSubMenu(index : number){
    this.subMenuHidden[index] = !this.subMenuHidden[index];
    document.getElementById('s' + index)!.className.replace('deselected', 'selected');
    for(let i = 0; i < this.subMenuHidden.length; i++){
      if(i != index && this.subMenuHidden[i] === false){
        this.subMenuHidden[i] = true;
        document.getElementById('s' + i)!.className.replace('selected', 'deselected');

      }
    }
  }

}
