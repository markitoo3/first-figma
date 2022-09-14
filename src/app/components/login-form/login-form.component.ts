import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  ngOnInit(): void {

  }

  onSubmit(): void {
   console.log('logged in')

  }

}
