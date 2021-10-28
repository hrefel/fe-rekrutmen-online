import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/config/url.config';
import { AlertService } from 'src/app/services/alert.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-bpjs-checking',
  templateUrl: './bpjs-checking.component.html',
  styleUrls: ['./bpjs-checking.component.scss'],
})
export class BpjsCheckingComponent implements OnInit {
  isBPJS = false;
  noBPJS: any;
  dataBPJS: any = {};
  // res Bpjs service
  namaBpjs: any;
  jenisKelaminBpjs: any;
  nikBpjs: any;
  noKartuBpjs: any;
  statusPesertaBpjs: any;
  umurBpjs: any;
  hakKelasBpjs: any;
  constructor(private http: HttpService, private alert: AlertService) {}

  ngOnInit(): void {}

  getDataBPJSPasien() {
    this.http
      .get(BASE_URL._BPJS_SERVICE + 'get-no-peserta/' + this.noBPJS)
      .subscribe((res: any) => {
        if(!res.data.response.peserta.mr.noMR) {
          // this.noBPJS = "";
          this.alert.warning("BPJS Anda belum terdaftar di Rumah Sakit Anak dan Bunda Harapan Kita")
          // return;
        }

        if (res.data.response) {
          this.dataBPJS = res.data.response.peserta;
          this.namaBpjs = this.dataBPJS.nama;
          this.jenisKelaminBpjs =
            this.dataBPJS.sex === 'L' ? 'Laki - laki' : 'Perempuan';
          this.nikBpjs = this.dataBPJS.nik;
          this.noKartuBpjs = this.dataBPJS.noKartu;
          this.statusPesertaBpjs = this.dataBPJS.statusPeserta.keterangan;
          this.umurBpjs = this.dataBPJS.umur.umurSekarang;
          this.hakKelasBpjs = this.dataBPJS.hakKelas.keterangan;

          // di return agar aman dari clear
          return;
        }
        // jika no kartu tidak sesuai
        this.noBPJS = '';
        this.dataBPJS = '';
        this.namaBpjs = '';
        this.jenisKelaminBpjs = '';
        this.nikBpjs = '';
        this.noKartuBpjs = '';
        this.statusPesertaBpjs = '';
        this.umurBpjs = '';
        this.hakKelasBpjs = '';
        this.alert.info(res.data.metaData.message);
      });
  }
}
