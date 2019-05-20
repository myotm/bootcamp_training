import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../models/user.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  public user: User;

  @Output()
  public loginClick = new EventEmitter();

  @Output()
  public toggleAuthClick = new EventEmitter();

  public loginForm = FormGroup;

  constructor( private formBuilder : FormBuilder ) { 

  }

  ngOnInit() {
    
  }

  
}
