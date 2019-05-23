import {
  Component, ElementRef, EventEmitter, 
  Input, Output, ViewChild,
  OnInit, AfterViewInit
} from '@angular/core';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() public user: User;

  
  
  constructor() {
    this.user = {
      username: 'myo',
      password: 'myo123',
      fullName: 'Myo Thura Maung',
      address: 'YANGON'
    };
   }

  
  public ngOnInit() {
  }

  

  
  public onLoginClick(){
    console.log("Pressed Login.");
    console.log(this.user.username + "--------" + this.user.fullName + " has logged in.");
    
  }

}
