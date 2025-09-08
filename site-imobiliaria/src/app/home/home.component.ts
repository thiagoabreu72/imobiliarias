import { Component } from '@angular/core';
import { BannerHome } from '../banner-home/banner-home';
import { CarrocelBuscaRapida } from "../components/carrocel-busca-rapida/carrocel-busca-rapida";
import { Footer } from "../components/footer/footer";
import { MaisFiltros } from "../components/mais-filtros/mais-filtros";
import { CarrocelEmpreendimentos } from "../components/carrocel-empreendimentos/carrocel-empreendimentos";
import { ImovelDestaque } from "../components/imovel-destaque/imovel-destaque";
import { CardImovel } from "../components/card-imovel/card-imovel";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerHome, CarrocelBuscaRapida, Footer, MaisFiltros, CarrocelEmpreendimentos, ImovelDestaque, CardImovel],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
