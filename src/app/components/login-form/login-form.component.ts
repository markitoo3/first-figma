import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  ngOnInit(): void {

  }

  onSubmit(): void {
   this.router.navigate(['/main-page']);

  }

}
