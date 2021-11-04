import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-beranda-web',
  templateUrl: './beranda-web.component.html',
  styleUrls: ['./beranda-web.component.scss'],
})
export class BerandaWebComponent implements OnInit {
  basePathImage: any = '../../../../../assets/';
  images = [
    { path: `${this.basePathImage}photo-1443996104801-80c82e789b18.jfif` },
    { path: `${this.basePathImage}photo-1443996104801-80c82e789b18.jfif` },
    { path: `${this.basePathImage}photo-1443996104801-80c82e789b18.jfif` },
  ];
  constructor() {}

  ngOnInit(): void {}
}
