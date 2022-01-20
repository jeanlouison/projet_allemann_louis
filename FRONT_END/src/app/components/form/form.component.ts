import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { Adresse } from 'src/shared/models/adresse';
import { Token } from 'src/shared/models/token';
import { User } from 'src/shared/models/User';
import { AddressState } from 'src/shared/states/address-state';
import { TokenState } from 'src/shared/states/token-state';
import { MatchValidator } from '../../tools/match-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {  

  @Input()
  selectedAdresse: Adresse = new Adresse();

  @Output()
  mainForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    adresse: [new Adresse({
      adresse: this.selectedAdresse.adresse,
      codePostal: this.selectedAdresse.codePostal,
      ville: this.selectedAdresse.ville
    })],
    telephone: [''],
    email: ['', Validators.email],
    civilite: ['M'],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
    },{
    validator: MatchValidator('password', 'passwordConfirm')
  });

  @Output()
  showRecap: boolean = false;

  isComponentValid = true;

  @Select(AddressState.getListeAdresses)
  addresses$!: Observable<Adresse[]>;

  @Select(TokenState.getAuthenticatedUser)
  user$!: Observable<Token>;

  constructor(private fb: FormBuilder,
    private authService: AuthService) {

  }

  onSubmit() {
    this.showRecap = true;
  }

  updateCivilite(value: string) {
    this.mainForm.get('civilite')?.setValue(value);
  }

  saveFormData() {
    let saveData = JSON.parse(JSON.stringify(this.mainForm.value));
    saveData['adresse'] = JSON.parse(JSON.stringify(this.selectedAdresse));
    localStorage.setItem('FormData', JSON.stringify(saveData));
  }

  restoreFormData() {
    let storageData = localStorage.getItem('FormData');
    if (storageData != null) {
      this.mainForm.patchValue(JSON.parse(storageData));
    }
    this.mainForm.get('adresse')?.patchValue(this.selectedAdresse);
    localStorage.removeItem('FormData');
  }

  updateDataFromUser(user: User) {
    console.log(user);
    
    if (this.mainForm.get('nom')?.value != user.lastname
     && this.mainForm.get('nom')?.value.length === 0)
      this.mainForm.get('nom')?.setValue(user.lastname);

    if (this.mainForm.get('prenom')?.value != user.firstname
    && this.mainForm.get('prenom')?.value.length === 0)
      this.mainForm.get('prenom')?.setValue(user.firstname);

    if (this.mainForm.get('email')?.value != user.email
    && this.mainForm.get('email')?.value.length === 0)
    this.mainForm.get('email')?.setValue(user.email);

    if (this.mainForm.get('telephone')?.value != user.phone
    && this.mainForm.get('telephone')?.value.length === 0)
      this.mainForm.get('telephone')?.setValue(user.phone);
    
    if (this.mainForm.get('civilite')?.value != user.sex
     && this.mainForm.get('civilite')?.value.length === 0)
      this.mainForm.get('civilite')?.setValue(user.sex);

    if (this.mainForm.get('password')?.value != user.password
    && this.mainForm.get('password')?.value.length === 0)
      this.mainForm.get('password')?.setValue(user.password);
  }

  ngOnInit(): void {

    this.restoreFormData();

    this.authService.getClientInfos().toPromise()
    .then(user => {
      this.updateDataFromUser(user);
    })
    .catch(err => console.log(err));
  }

}
