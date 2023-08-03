import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  loginForm!: FormGroup;
  username!: string;
  password!: string;
  submitted = false;
  returnUrl!: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl('')
    });
    
  }
  onLogin(): void {
    this.submitted = true;
    this.authenticationService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigateByUrl('/products');
        });
  }
}
