import { Component } from '@angular/core';
import { BannerHome } from '../banner-home/banner-home';
import { CarrocelBuscaRapida } from "../components/carrocel-busca-rapida/carrocel-busca-rapida";
import { Footer } from "../components/footer/footer";
import { MaisFiltros } from "../components/mais-filtros/mais-filtros";
import { BannerEmpreendimentos } from "../components/banner-empreendimentos/banner-empreendimentos";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerHome, CarrocelBuscaRapida, Footer, MaisFiltros, BannerEmpreendimentos],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
