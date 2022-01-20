import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductState } from 'src/shared/states/products-state';
import { SharedModule } from './shared-module/shared-module.module';
import { AdresseComponent } from './components/adresse/adresse.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TokenState } from 'src/shared/states/token-state';
import { ApiHttpInterceptor } from 'apihttp.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    FiltersComponent,
    AdresseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'panier', loadChildren: () => import('./components/panier/panier.module').then(m => m.PanierModule) },
      { path: 'client', loadChildren: () => import('./components/form/form.module').then(m => m.FormModule) },
      { path: 'produit/:ref', loadChildren: () => import('./components/detail/detail.module').then(m => m.DetailModule) },
      { path: 'catalogue', loadChildren: () => import('./components/catalog/catalog.module').then(m => m.CatalogModule) },
      { path: 'adresse', loadChildren: () => import('./components/adresse/adresse.module').then(m => m.AdresseModule) },
      // { path: 'login', loadChildren: () => import('./components/client/client.module').then(m => m.ClientModule) },
      // { path: 'createAccount', loadChildren: () => import('./components/client/client.module').then(m => m.ClientModule) },
      { path: '', loadChildren: () => import('./components/client/client.module').then(m => m.ClientModule) },
    ]),
    NgxsModule.forRoot([ProductState, TokenState], {
      developmentMode: !environment.production
    }),
    SharedModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
