import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { TokenState } from 'src/shared/states/token-state';
import { Observable } from 'rxjs';
import { Token } from 'src/shared/models/token';
import { SetToken } from 'src/shared/actions/token-set';
import { TokenStateModel } from 'src/shared/states/token-state-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Select(TokenState.getAuthenticatedUser)
  user$!: Observable<Token>;

  constructor(private router: Router,
    private store: Store) { }

  ngOnInit(): void {

    this.user$.subscribe(token => {
      if (token === undefined) {
        var newToken = new Token();
        newToken.username = 'home';
        this.store.dispatch(new SetToken(newToken));
      } else {
        console.log(token);
        if (token.username.length > 0)
          this.router.navigateByUrl('/catalogue')
      }
    });

    // this.user$.toPromise()
    // .then(token => {
    //   if (token.username.length > 0)
    //     this.router.navigateByUrl('/catalogue')
    // });
  }

}
