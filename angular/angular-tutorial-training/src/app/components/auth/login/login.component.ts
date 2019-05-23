import {
  Component, ElementRef, EventEmitter, 
  Input, Output, ViewChild,
  OnInit, AfterViewInit
} from '@angular/core';
import { User } from '../../../models/user.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() public user : User;

  @Output() public loginForm : FormGroup;
  
  
  constructor( private formbuilder : FormBuilder ) {
    this.user = {
      email: 'myo',
      password: 'myo123',
      fullName: 'Myo Thura Maung',
      address: 'YANGON'
    };
   }

  
  public ngOnInit() {
    this.initLoginForm();
  }


  public initLoginForm(){
    this.loginForm = this.formbuilder.group({
      emailControl: ['', [Validators.required]],
      passwordControl: ['',[Validators.required]]
    });
  }

  

  
  public onLoginClick(){
    console.log("Pressed Login.");
    console.log(this.user.email + "--------" + this.user.fullName + " has logged in.");
    
  }

}
