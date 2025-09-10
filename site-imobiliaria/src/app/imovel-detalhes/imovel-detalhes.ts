import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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

@Component({
  selector: 'app-imovel-detalhes',
  imports: [CommonModule],
  templateUrl: './imovel-detalhes.html',
  styleUrl: './imovel-detalhes.css'
})
export class ImovelDetalhes implements OnInit {

  propertyDetails: PropertyDetails | undefined;
  images: any[] | undefined;

  uiText = {
    sectionTitles: {
      description: 'Descrição',
      features: 'Características'
    },
    featureCategories: {
      internal: 'Internas',
      external: 'Externas',
      extra: 'Extras'
    },
    carousel: {
      previous: 'Anterior',
      next: 'Próximo'
    }
  };

  ngOnInit(): void {
    this.propertyDetails = {
      title: 'Vila Moderna de Luxo com Piscina',
      location: 'Beverly Hills, Los Angeles, CA 90210',
      code: '#BH2024001',
      price: 'R$ 15.000.000',
      monthlyFee: 'R$ 2.500',
      description: 'Esta deslumbrante vila moderna representa o auge da vida de luxo em Beverly Hills. Com um design de conceito aberto, janelas do chão ao teto que inundam o espaço com luz natural, esta propriedade oferece vistas deslumbrantes e uma vida interna e externa perfeitas.',
      stats: [
        { icon: 'icon-area.svg', value: '450', label: 'm² (const.)' },
        { icon: 'icon-area.svg', value: '800', label: 'm² (total)' },
        { icon: 'icon-bed.svg', value: '4', label: 'Quartos' },
        { icon: 'icon-shower.svg', value: '3', label: 'Banheiros' },
        { icon: 'icon-garage.svg', value: '2', label: 'Vagas' },
        { icon: 'icon-bed.svg', value: '2', label: 'Suítes' }
      ],
      features: {
        internal: ['Ar Condicionado', 'Piso de Madeira', 'Lareira'],
        external: ['Piscina', 'Jardim', 'Área Gourmet'],
        extra: ['Sistema de Segurança', 'Casa Inteligente', 'Painéis Solares']
      }
    };

    this.images = [
      { itemImageSrc: 'assets/images/imagem-casa-teste.jpg', thumbnailImageSrc: 'assets/images/imagem-casa-teste.jpg', alt: 'Fachada da casa moderna' },
      { itemImageSrc: 'assets/images/imagem-casa-teste.jpg', thumbnailImageSrc: 'assets/images/imagem-casa-teste.jpg', alt: 'Piscina e área de lazer' },
      { itemImageSrc: 'assets/images/imagem-casa-teste.jpg', thumbnailImageSrc: 'assets/images/imagem-casa-teste.jpg', alt: 'Sala de estar ampla' },
      { itemImageSrc: 'assets/images/imagem-casa-teste.jpg', thumbnailImageSrc: 'assets/images/imagem-casa-teste.jpg', alt: 'Piscina e área de lazer' },
      { itemImageSrc: 'assets/images/imagem-casa-teste.jpg', thumbnailImageSrc: 'assets/images/imagem-casa-teste.jpg', alt: 'Sala de estar ampla' }
    ];
  }
}
