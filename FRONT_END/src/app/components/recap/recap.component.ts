import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  @Input()
  formControls: FormGroup = new FormGroup({foo: new FormControl()});

  isObject(val: undefined): boolean { return typeof val === 'object'; }

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.postUpdateAccount(
      this.formControls.get('nom')?.value,
      this.formControls.get('prenom')?.value,
      this.formControls.get('password')?.value,
      this.formControls.get('email')?.value,
      this.formControls.get('telephone')?.value,
      this.formControls.get('civilite')?.value.charAt(0)
    ).toPromise()
    .then(() => this.router.navigateByUrl('/catalogue'))
    .catch(err => console.log(err));
  }

}
