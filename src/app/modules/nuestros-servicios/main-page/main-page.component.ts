import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/ourServices/services.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  services: any[] = [];

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.servicesService.getServices().subscribe(data => {
      this.services = data;
    });
  }
}