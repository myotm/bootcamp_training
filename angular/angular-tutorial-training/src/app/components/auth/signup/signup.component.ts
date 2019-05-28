import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../models/user.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidatorService } from '../../../services/validator.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() public user : User;

  @Input() public inputString : string;

  @Output() public signupClick = new EventEmitter();
  
  public signupForm : FormGroup;


  @Output() toggleAuthclick = new EventEmitter<boolean>();



  constructor( private formBuilder: FormBuilder, private validatorService: ValidatorService ) { 
    this.user = {
      email: 'myo',
      password: 'myo123',
      fullName: 'Myo Thura Maung',
      address: 'YANGON',
      gender: 'Male',
      dob: '1/18/1996',
      phoneNo: 123
    };
    
    
  }


  ngOnInit() {
    this.initSignupForm();
  }

  public initSignupForm(){
    this.signupForm = this.formBuilder.group({
      emailControl: ['', [Validators.required, Validators.email]],
      passwordControl: ['', [Validators.required, (control: FormControl) => {
        const isValid = !control || !control.value ? false : control.value.length < 6 ? false : true;
        return isValid ? null : {
            validatePasswordStrength: {
                valid: false
            }
        };
      }]],
      retypePasswordControl: ['', [Validators.required, (control: FormControl) => {
        return this.validatorService.validatePasswordMatch(control, this.inputString);
      }]],
      fullNameControl: ['', [Validators.required]],
      dobControl: ['', [Validators.required, this.validatorService.validateDOB]],
      addressControl: ['', [Validators.required]],
      phoneControl: ['', [Validators.required, this.validatorService.validatePhone]],
    });
    this.signupForm.controls.passwordControl.valueChanges.subscribe(() => {

      this.signupForm.controls.retypePasswordControl.updateValueAndValidity();
    });

  }

  public onSignupClick() {
    this.signupClick.emit();
}

}
