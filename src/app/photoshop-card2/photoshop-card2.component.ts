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
    let that:any=this;
  }
  
  getData(key:any){
    this.auth.getData(key).subscribe((data:any)=> {
      console.warn(data)
      this.statuses=data.statuses;
    })
  }
}
