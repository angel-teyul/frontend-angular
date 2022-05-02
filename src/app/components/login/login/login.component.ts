import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  luhn: string;
  luhn$: Subscription;

  personaForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  
  constructor(private loginService: LoginService) {
    console.log('mensaje renderizado desde el constructor');
    this.luhn = '';
  }

  onSubmit() {
    this.loginService.loginData(this.personaForm.value).subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    console.log('mensaje renderizado desde ngOnInit');
    this.getLuhn();
  }

  getLuhn() {
    console.log('method')
    this.luhn$ = this.loginService.getLuhn('id').subscribe(entry => {
      console.log('luhn desde el front', entry);
      this.luhn = entry.luhn.number;
      console.log('this.luhn', this.luhn);
    });
  }

  ngOnDestroy(): void {
    this.luhn$.unsubscribe();
  }

}
