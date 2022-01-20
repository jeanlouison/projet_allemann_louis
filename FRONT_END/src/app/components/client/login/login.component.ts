import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetToken } from 'src/shared/actions/token-set';
import { Token } from 'src/shared/models/token';
import { User } from 'src/shared/models/User';
import { TokenState } from 'src/shared/states/token-state';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  loginForm = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]]
  });

  userReponse$: Observable<User> = new Observable<User>();

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.postLogin(
       this.loginForm.get('username')?.value,
       this.loginForm.get('password')?.value
      )
      .subscribe( () => {
        let token = new Token();
        token.username = this.loginForm.get('username')?.value;
        console.log(token.username);
        this.store.dispatch(new SetToken(token));
        this.router.navigateByUrl('/catalogue');
      }, error => {
        let token = new Token();
        token.username = '';
        console.log(token.username);
        this.store.dispatch(new SetToken(token));
        this.router.navigateByUrl('/');
        console.log(error);
      });
  }

}
