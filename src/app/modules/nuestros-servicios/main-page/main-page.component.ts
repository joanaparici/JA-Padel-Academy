import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/ourServices/services.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-15px)' }),
        animate(
          '850ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)' })
        ),
      ]),
    ]),
  ],
})
export class MainPageComponent implements OnInit {
  services: any[] = [];

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.servicesService.getServices().subscribe((data) => {
      this.services = data;
    });
  }
}
