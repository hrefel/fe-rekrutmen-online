import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_URL } from 'src/app/config/url.config';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-master-soal',
  templateUrl: './master-soal.component.html',
  styleUrls: ['./master-soal.component.scss'],
})
export class MasterSoalComponent implements OnInit {
  rows = [];
  loadingIndicator = true;
  reorderable = true;
  columns = [
    { prop: 'nama' },
    { name: 'Gender' },
    { name: 'Company', sortable: false },
  ];
  isPressed = false;

  // model input
  namaSoal: string;
  waktuPengerjaan: number = 0;

  constructor(private http: HttpService, private route: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loadingIndicator = true;
    this.http
    .get(`${BASE_URL._BASE_ELEARNING}master/soal/all`)
    .subscribe((res: any) => {
      this.rows = res;
      this.loadingIndicator = false;
    });
  }

  tambahData() {
    let dataSave = {
      namaSoal: this.namaSoal,
      waktuPengerjaan: this.waktuPengerjaan,
      createdBy: "Refel"
    }

    console.log(dataSave);
    this.http.save(`${BASE_URL._BASE_ELEARNING}master/soal`, dataSave).subscribe((res: any) => {
      this.getData();
    })
  }

  hapusData(data) {
    
    this.http.save(`${BASE_URL._BASE_ELEARNING}master/soal/delete`,{id: data._id}).subscribe((res: any) => {
      this.getData();
    })
  }

  inputPertanyaan(data) {
    this.route.navigate(['bank-soal/master-pertanyaan/' + data._id]);
  }

}
