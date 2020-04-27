import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spanel-top',
  templateUrl: './spanel-top.component.html',
  styleUrls: ['./spanel-top.component.scss']
})
export class SpanelTopComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  getCartQuanity(){
    let quantity = 0;
    for (const product of this.mainService.cart) {
      quantity += 1;
    }
    return quantity;
  }
}
