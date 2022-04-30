import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  luhn: string;
  luhn$: Subscription;
  
  constructor(private loginService: LoginService) {
    console.log('mensaje renderizado desde el constructor');
    this.luhn = '';
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
    console.log('mensaje renderizado desde onDestroy');
    this.luhn$.unsubscribe();
  }

}
