import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public open: string = "open";
  public seasonStatus: boolean = true;
  public adminString: string = "";
  public adminMessage: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  openSeason(){
    this.open = "open";
    this.seasonStatus = true;
  }

  closeSeason(){
    this.open = "closed";
    this.seasonStatus = false;
  }

  addAdmin(){

  }

  removeAdmin(){

  }

}
