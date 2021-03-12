import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public slideIndex: number = 0;
  public imageUrls: string[] = ["https://hrswebapps.byu.edu/seoty/img/calendar_clipart_by_Etenar.png", "https://hrswebapps.byu.edu/seoty/img/qualify.png", "https://hrswebapps.byu.edu/seoty/img/Winner2020.jpg"];
  constructor() { }

  ngOnInit(): void {
    
  }

  nextImage(){
    if (this.slideIndex < 2){
      this.slideIndex += 1;
    } else {
      this.slideIndex = 0;
    }
  }

  lastImage(){
    if (this.slideIndex > 0){
      this.slideIndex -= 1;
    } else {
      this.slideIndex = 2;
    }
  }

  chooseIndex(i: number){
    this.slideIndex = i;
  }

}
