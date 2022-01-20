import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthService } from 'src/app/auth.service';
import { MatchValidator } from 'src/app/tools/match-validator';
import { SetToken } from 'src/shared/actions/token-set';
import { Token } from 'src/shared/models/token';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  @Output()
  mainForm = this.fb.group({
    identifiant: ['', Validators.required],
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
    },{
    validator: MatchValidator('password', 'passwordConfirm')
  });

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.postCreateAccount(
      this.mainForm.get('identifiant')?.value,
      this.mainForm.get('nom')?.value,
      this.mainForm.get('prenom')?.value,
      this.mainForm.get('password')?.value
     ).subscribe( () => {
        let token = new Token();
        token.username = this.mainForm.get('identifiant')?.value;
        this.store.dispatch(new SetToken(token));
        this.router.navigateByUrl('/catalogue');
      },
      error => {
        let token = new Token();
        this.store.dispatch(new SetToken(token));
        this.router.navigateByUrl('/');
        console.log(error);
      }
     );
  }

}
