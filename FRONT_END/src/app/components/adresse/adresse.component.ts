import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddAddress } from 'src/shared/actions/address-add';
import { RemoveAddress } from 'src/shared/actions/address-remove';
import { Adresse } from 'src/shared/models/adresse';
import { AddressState } from 'src/shared/states/address-state';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.scss']
})
export class AdresseComponent implements OnInit {

  @Select(AddressState.getListeAdresses)
  addresses$!: Observable<Adresse[]>;

  @Output()
  adresseForm = this.fb.group({
    adresse: ['', Validators.required],
    codePostal: ['', Validators.pattern("[0-9]{5}")],
    ville: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private store: Store) { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    var formAdresse: string = this.adresseForm.get('adresse')?.value;
    var formCodePostal: string = this.adresseForm.get('codePostal')?.value;
    var formVille: string = this.adresseForm.get('ville')?.value;

    var createdAddress = new Adresse;
    createdAddress.adresse = formAdresse;
    createdAddress.codePostal = formCodePostal;
    createdAddress.ville = formVille;

    console.log(createdAddress);

    this.addAddress(createdAddress);
  }

  removeAddress(address: Adresse) {
    this.store.dispatch(new RemoveAddress(address));
  }

  addAddress(address: Adresse) {
    this.store.dispatch(new AddAddress(address));
  }

}
