
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BASE_URL } from 'src/app/config/url.config';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-master-pertanyaan',
  templateUrl: './master-pertanyaan.component.html',
  styleUrls: ['./master-pertanyaan.component.scss']
})
export class MasterPertanyaanComponent implements OnInit {
  idSoal: any;  
  constructor(private router: ActivatedRoute, private http: HttpService) { 
    this.idSoal = router.snapshot.paramMap.get("idSoal");
    
  }

  ngOnInit(): void {
    this.http.get(`${BASE_URL._BASE_ELEARNING}master/pertanyaan`).subscribe((res: any) => {
      console.log(res);
    })
    
  }

}
