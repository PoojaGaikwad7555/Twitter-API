import { Component } from '@angular/core';
import { AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twitter';
  message= 'Auto Refresh in 30 Sec';
  constructor(private auth: AuthService){
    this.auth.getData("adobe").subscribe(data=> {
      console.warn(data)
    })

  }
}
