import { Component } from '@angular/core';
import { BannerHome } from '../banner-home/banner-home';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerHome],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
