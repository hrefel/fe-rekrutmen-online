import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BASE_URL } from 'src/app/config/url.config';
import { AlertService } from 'src/app/services/alert.service';
import { HttpService } from 'src/app/services/http.service';
import { MediaBreakpointService } from 'src/app/services/media-breakpoint.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showPassword = false;
  kataSandi: any;
  namaPengguna: any;

  media: any;

  constructor(
    private http: HttpService,
    private toastr: AlertService,
    private cookieSvc: CookieService,
    private mdbpService: MediaBreakpointService
  ) {}

  ngOnInit(): void {
    this.media = this.mdbpService.getMedia();
  }
  
  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  signin() {
    if (!this.namaPengguna) {
      this.toastr.warning('Harap isi Nama Pengguna terlebih dahulu!');
      return;
    }

    if (!this.kataSandi) {
      this.toastr.warning('Harap isi Kata Sandi terlebih dahulu!');
      return;
    }

    let dataLogin = {
      username: this.namaPengguna,
      password: this.kataSandi,
    };

    this.http
      .save(BASE_URL._BASED + 'auth-registrasi-service/sign-in', dataLogin)
      .subscribe(
        (res: any) => {
          this.cookieSvc.set('token', res.result.token);
          this.cookieSvc.set('dataLogin', JSON.stringify(res.result));

          window.location.replace('/beranda');
        },
        (err) => {
          this.toastr.warning('Kombinasi Nama Pengguna dan Password Salah !');
        }
      );
  }
}
