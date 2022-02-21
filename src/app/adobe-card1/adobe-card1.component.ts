import { HttpClient } from '@angular/common/http';
import { literal } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AuthService } from '../auth.service';
import { tweet } from '../tweet';


@Component({
  selector: 'app-adobe-card1',
  templateUrl: './adobe-card1.component.html',
  styleUrls: ['./adobe-card1.component.css']
})
export class AdobeCard1Component implements OnInit {
  statuses: any = [];
  data: number = 30;
  key :any = ""
  constructor(private auth:AuthService,private http:HttpClient){
   }

  ngOnInit() {
    
    /*by default show adobe*/
    this.getData("adobe");
    let that:any=this;
    const obs$ = interval(1000) //Applying setTime Interval method for refreshing component every 30 sec
    obs$.subscribe((d) => {
      this.data = this.data-1;
      if(this.data==0){
        location.reload();
      }
    });
 
  }
  
  /*auth service subscribe*/
  getData(key:any){
    this.auth.getData(key).subscribe((data:any)=> {
      this.statuses=data.statuses;
    })
  }

/* onSerch Method for Searching(Filtering) */
  onSearch(){
   this.getData(this.key==""?"adobe":this.key);
   this.data=30; 
  }
}

