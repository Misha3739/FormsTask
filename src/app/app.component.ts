import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Form, NgForm} from '@angular/forms';

class User
{
 email: string;
 password: string;
 option: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  submitted = false;

  title = 'app';

  options = ['basic', 'advanced', 'prone'];

  defaultOption= 'advanced';

  passwordValid = false;
  passwordConfirmValid = false;

  password: string;
  confirmPassword: string;

  user: User;

  constructor()
  {
    this.user = new User();
  }

  onLog()
  {
    console.log(this.signupForm);
  }

  onSubmit(form: NgForm)
  {
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = '';
    this.user.option = this.signupForm.value.option;
    this.submitted = true;
  }


  onPasswordChange()
  {
    this.passwordValid  =  this.password.length >= 7;
  }

  onConfirmPasswordChange()
  {
    this.passwordConfirmValid =  this.password === this.confirmPassword;
  }
}
