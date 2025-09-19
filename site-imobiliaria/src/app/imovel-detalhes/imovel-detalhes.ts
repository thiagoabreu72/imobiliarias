import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../services/service';
import { Loading } from "../components/loading/loading";

interface PropertyDetails {
  title: string;
  location: string;
  code: string;
  price: string;
  monthlyFee: string;
  description: string;
  stats: Stat[];
  features: {
    internal: string[];
    external: string[];
    extra: string[];
  };
}

interface Stat {
  icon: string;
  value: string;
  label: string;
}

interface CarouselImage {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
}

@Component({
  selector: 'app-imovel-detalhes',
  imports: [CommonModule, Loading],
  templateUrl: './imovel-detalhes.html',
  styleUrl: './imovel-detalhes.css',
})
export class ImovelDetalhes implements OnInit {
  propertyDetails: PropertyDetails | undefined;
  images: any[] | undefined;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: Service
  ) { }

  uiText = {
    sectionTitles: {
      description: 'Descrição',
      features: 'Características',
    },
    featureCategories: {
      internal: 'Internas',
      external: 'Externas',
      extra: 'Extras',
    },
    carousel: {
      previous: 'Anterior',
      next: 'Próximo',
    },
  };

  ngOnInit(): void {
    this.isLoading = true; // Garante que o loading comece
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.buscarDetalhesImovel(+id).subscribe({
        next: (detalhesDaApi) => {
          this.propertyDetails = this.mapearApiParaDetalhes(detalhesDaApi);
          this.images = this.mapearApiParaImagens(detalhesDaApi);
          this.isLoading = false;
        },
        error: (err) => {
          console.error("Erro ao buscar detalhes do imóvel:", err);
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
    }
  }

  private mapearApiParaDetalhes(apiData: any): PropertyDetails {

    const imovel =  apiData.imovel;

    const details: PropertyDetails = {
      title: imovel.titulo,
      location: `${imovel.bairro}, ${imovel.cidade} - ${imovel.estado}`,
      code: `#${imovel.codigo}`,
      price: imovel.valor,
      monthlyFee: imovel.valorcondominio,
      description: imovel.descricao,
      stats: [],
      features: {
        internal: [],
        external: [],
        extra: [],
      },
    };

    details.stats.push({ icon: 'icon-area.svg', value: (imovel.areainterna || "0,00").replace(',', '.'), label: 'm² (const.)' });
    details.stats.push({ icon: 'icon-cerca.svg', value: (imovel.arealote || "0,00").replace(',', '.'), label: 'm² (total)' });
    details.stats.push({ icon: 'icon-bed.svg', value: imovel.numeroquartos, label: 'Quartos' });
    details.stats.push({ icon: 'icon-shower.svg', value: imovel.numerobanhos, label: 'Banheiros' });
    details.stats.push({ icon: 'icon-garage.svg', value: imovel.numerovagas, label: 'Vagas' });
    details.stats.push({ icon: 'icon-suites.svg', value: imovel.numerosuites, label: 'Suítes' });

    const featureMap = {
      internal: {
        arcondicionado: 'Ar Condicionado', lavabo: 'Lavabo', armariobanheiro: 'Armário no Banheiro',
        armariocozinha: 'Armário na Cozinha', armarioquarto: 'Armário no Quarto',
        closet: 'Closet', dce: 'DCE', despensa: 'Despensa', escritorio: 'Escritório',
        lareira: 'Lareira', mobiliado: 'Mobiliado', areaservico: 'Área de Serviço',
      },
      external: {
        piscina: 'Piscina', churrasqueira: 'Churrasqueira', espacogourmet: 'Espaço Gourmet',
        jardim: 'Jardim', playground: 'Playground', quadraesportiva: 'Quadra Esportiva',
        salaofestas: 'Salão de Festas', sauna: 'Sauna', beachtenis: 'Beach Tennis',
        quintal: 'Quintal', gramado: 'Gramado'
      },
      extra: {
        portaria24horas: 'Portaria 24h', alarme: 'Alarme', circuitotv: 'Circuito de TV',
        gascanalizado: 'Gás Canalizado', aguaindividual: 'Água Individual',
        aquecedorsolar: 'Aquecedor Solar', permiteanimais: 'Permite Animais'
      }
    };

    for (const key in featureMap.internal) {
      if (imovel[key] === true) details.features.internal.push(featureMap.internal[key as keyof typeof featureMap.internal]);
    }
    for (const key in featureMap.external) {
      if (imovel[key] === true) details.features.external.push(featureMap.external[key as keyof typeof featureMap.external]);
    }
    for (const key in featureMap.extra) {
      if (imovel[key] === true) details.features.extra.push(featureMap.extra[key as keyof typeof featureMap.extra]);
    }

    return details;
  }

  private mapearApiParaImagens(apiData: any): CarouselImage[] {
    const imagensFormatadas: CarouselImage[] = [];
    const imovel = apiData.imovel;

    if (imovel.urlfotoprincipal) {
      imagensFormatadas.push({
        itemImageSrc: imovel.urlfotoprincipal,
        thumbnailImageSrc: imovel.urlfotoprincipalp || imovel.urlfotoprincipal,
        alt: imovel.descricaoFotoPrincipal || imovel.titulo
      });
    }

    if (imovel.fotos && Array.isArray(imovel.fotos)) {
      imovel.fotos.forEach((foto: any) => {
        if (foto.url !== imovel.urlfotoprincipal) {
          imagensFormatadas.push({
            itemImageSrc: foto.url,
            thumbnailImageSrc: foto.urlp || foto.url,
            alt: foto.descricao || imovel.titulo
          });
        }
      });
    }

    return imagensFormatadas;
  }
}
