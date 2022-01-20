import { Component, OnInit } from '@angular/core';
import { ProductState } from 'src/shared/states/products-state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { TokenState } from 'src/shared/states/token-state';
import { Token } from 'src/shared/models/token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select(ProductState.getNbProduits)
  numberProductsInCart$!: Observable<number>;

  @Select(TokenState.getAuthenticatedUser)
  user$!: Observable<Token>;

  constructor() {

  }

  ngOnInit(): void {

    this.user$.subscribe(token => {
      if (token === undefined) {
        console.log(token);
      } else {
        console.log(token.username);
      }
    });
  }

}
