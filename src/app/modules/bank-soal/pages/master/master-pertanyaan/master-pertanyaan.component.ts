import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BASE_URL } from 'src/app/config/url.config';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-master-pertanyaan',
  templateUrl: './master-pertanyaan.component.html',
  styleUrls: ['./master-pertanyaan.component.scss'],
})
export class MasterPertanyaanComponent implements OnInit {
  idSoal: any;
  dataSoal: any;
  dataPertanyaan: any;
  isEditSoal = false;
  showInputPertanyaan = false;

  namaPertanyaan: any;
  tempJawaban = [];
  constructor(private router: ActivatedRoute, private http: HttpService) {
    this.idSoal = router.snapshot.paramMap.get('idSoal');
  }

  ngOnInit() {
    this.tempJawaban.push({
      namaJawaban: '',
      jawabanBenar: false,
    });
    this.getDataSoal();
    this.getDataPertanyaan();
  }

  getDataSoal() {
    this.http
      .get(`${BASE_URL._BASE_ELEARNING}master/soal?idSoal=${this.idSoal}`)
      .subscribe((res: any) => {
        this.dataSoal = res;
      });
  }

  getDataPertanyaan() {
    this.http
      .get(
        `${BASE_URL._BASE_ELEARNING}transaksi/pertanyaan-dan-jawaban?idSoal=${this.idSoal}`
      )
      .subscribe((res: any) => {
        this.dataPertanyaan = res.data;
      });
  }

  editData() {
    let body = {
      id: this.idSoal,
      namaSoal: this.dataSoal.namaSoal,
    };

    this.http
      .save(`${BASE_URL._BASE_ELEARNING}master/soal/edit`, body)
      .subscribe((res) => {
        this.isEditSoal = false;
        this.getDataSoal();
      });
  }

  tambahJawaban() {
    this.tempJawaban.push({
      namaJawaban: '',
      jawabanBenar: false,
    });
  }

  savePertanyaanDanJawaban() {
    let bodySave = {
      idSoal: this.idSoal,
      namaPertanyaan: this.namaPertanyaan,
      listJawaban: [...this.tempJawaban],
    };

    console.log(bodySave);
    this.http
      .save(
        `${BASE_URL._BASE_ELEARNING}transaksi/pertanyaan-dan-jawaban`,
        bodySave
      )
      .subscribe((res) => {
        this.resetFormSimpan();
        this.getDataPertanyaan();
      });
  }

  resetFormSimpan() {
    this.tempJawaban = [];

    this.tempJawaban.push({
      namaJawaban: '',
      jawabanBenar: false,
    });
    
    this.namaPertanyaan = null;
  }
}
