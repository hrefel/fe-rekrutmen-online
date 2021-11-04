import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/config/url.config';
import { HttpService } from 'src/app/services/http.service';
import { Format } from 'src/app/shared/format';

@Component({
  selector: 'app-lowongan',
  templateUrl: './lowongan.component.html',
  styleUrls: ['./lowongan.component.scss'],
})
export class LowonganComponent implements OnInit {
  listKategori: any;
  listJenjangPendidikan: any;
  listLowongan: any;

  selectedKategori: any = "";
  selectedJenjangPendidikan: any= "";
  judulLowongan: any = "";

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.get(`${BASE_URL._BASE_MASTER}kategori`).subscribe((res: any) => {
      this.listKategori = res;
    });

    this.http
      .get(`${BASE_URL._BASE_MASTER}jenjang-pendidikan`)
      .subscribe((res: any) => {
        this.listJenjangPendidikan = res;
      });

    this.getDataLowongan();
  }

  getDataLowongan() {
    // http://localhost:3000/api/web/lowongan?judulLowongan=dokter&kategori=&jenjangPendidikan=
    this.http
      .get(
        `${BASE_URL._BASE_WEBAPP}lowongan?judulLowongan=${this.judulLowongan}&kategori=${this.selectedKategori}&jenjangPendidikan=${this.selectedJenjangPendidikan}`
      )
      .subscribe((res: any) => {
        for(let i = 0; i < res.length; i++) {
          res[i].lowonganKadaluarsa = Format.toDateWithFormat(res[i].lowonganKadaluarsa, 'DD MMM YYYY')
        }
        this.listLowongan = res;
      });
  }
}
