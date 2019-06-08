import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  slideOpts = {
    initialSlide:0,
    speed: 20,
    autoplay:true,
    loop: true,
    slidesPerView: 1,
   };

  
}