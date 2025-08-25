import { Component } from '@angular/core';
import { BannerHome } from '../banner-home/banner-home';
import { CarrocelBuscaRapida } from "../components/carrocel-busca-rapida/carrocel-busca-rapida";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerHome, CarrocelBuscaRapida],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
