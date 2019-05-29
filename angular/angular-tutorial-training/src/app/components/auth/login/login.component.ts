import {
  Component, ElementRef, EventEmitter, 
  Input, Output, ViewChild,
  OnInit, AfterViewInit
} from '@angular/core';
import { User } from '../../../models/user.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LocationService, AuthService, ValidatorService, HttpService, UserApiService } from 'src/app/services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input() public user : User;

  @Output() public loginClick = new EventEmitter();
  
  public loginForm : FormGroup;

  @Output() toggleAuthclick = new EventEmitter<boolean>();
  
  constructor( private formbuilder : FormBuilder, private validatorService: ValidatorService, 
    private locationService: LocationService, private authService: AuthService ) {
    this.user = {
      email: 'myo',
      password: 'myo123',
      fullName: 'Myo Thura Maung',
      address: 'YANGON',
      gender: 'Male',
      dob: 'January',
      phoneNo: 123,
      city: 'Kuala Lumpur',
      country: 'Malaysia'
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
    this.authService.login(this.user.email, this.user.password)
            .subscribe(user => {
                if(user) {
                    this.user = user;
                    this.loginClick.emit();
                }
            }, err => { 
                console.log('Error');
            });
    
  }

}
