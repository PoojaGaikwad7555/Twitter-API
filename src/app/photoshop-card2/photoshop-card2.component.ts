import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-photoshop-card2',
  templateUrl: './photoshop-card2.component.html',
  styleUrls: ['./photoshop-card2.component.css']
})
export class PhotoshopCard2Component implements OnInit {
  statuses: any = [];
  key :any = ""
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.getData("photoshop"); 
    this.getDataFB("facebook"); 
    this.getDataInsta("instagram");
    let that:any=this;
  }
  
  getData(key:any){         //For Photoshop tweets
    this.auth.getData(key).subscribe((data:any)=> {
      this.statuses=data.statuses;
    })
  }
  getDataFB(key:any){       //For Facebook tweets
    this.auth.getData(key).subscribe((data1:any)=> {
      this.statuses=data1.statuses;
    })
  }
  getDataInsta(key:any){    //For Instagram tweets
    this.auth.getData(key).subscribe((data2:any)=> {
      this.statuses=data2.statuses;
    })
  }
}
