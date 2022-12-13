import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  dimX : number[] = [];
  dimY : number[] = [];

  isMouseDown : boolean = false;

  gridHidden : boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.dimX = Array(15).fill(1, 0, 15).map((x,i)=>i); // [0,1,2,3,4]
    this.dimY = Array(25).fill(1, 0, 25).map((y,i)=>i); // [4,4,4,4,4]
    
  }

  ngAfterViewInit(): void {
    
  }

  onMouseOver(event : any) {
    switch(event.type){
      case "mousedown": {
        this.isMouseDown = true;
        break;
      }
      case "mouseup": {
        this.isMouseDown = false;
        break;
      }
      case "dragstart": {
        this.isMouseDown = true;
        event.preventDefault();
        break;
      }
      case "dragend": {
        this.isMouseDown = false;
        event.preventDefault();
      }
    }

    if(this.isMouseDown === true){
      document.getElementById(event.target.id)!.style.backgroundColor = "gray";
    }
  }

  onDrag(event: any){
    console.log('yoo')
    event.target.className += " dragging";
  }
}
