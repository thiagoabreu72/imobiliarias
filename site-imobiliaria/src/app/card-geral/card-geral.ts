import { Component } from '@angular/core';
import { Imovel } from '../interfaces/imovel.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-geral',
  imports: [CommonModule],
  templateUrl: './card-geral.html',
  styleUrl: './card-geral.css',
})
export class CardGeral {
  cards: Imovel[] = [
    {
      codigo: 20257,
      imgs: [
        'https://picsum.photos/300/200',
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0,
    },
    {
      codigo: 20254,
      imgs: [
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0,
    },
    {
      codigo: 20243,
      imgs: [
        'https://picsum.photos/300/200',
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0,
    },
    {
      codigo: 20275,
      imgs: [
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0,
    },
    {
      codigo: 20298,
      imgs: [
        'https://picsum.photos/300/200',
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0,
    },
    {
      codigo: 20299,
      imgs: [
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0,
    },
    {
      codigo: 20300,
      imgs: [
        'https://picsum.photos/300/200',
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0,
    },
    {
      codigo: 20301,
      imgs: [
        'https://picsum.photos/300/200',
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0,
    },
  ];

  visibleCards!: any;
  startIndex = 0;

  ngOnInit(): void {
    // this.visibleCards = this.cards.slice(0, 4);
    this.visibleCards = this.cards;
    console.log(this.cards);
    console.log(this.visibleCards);
  }

  favoritar(codigo: number) {
    // Implemente a lógica de favoritar aqui
    alert('Favoritado: ' + codigo);
  }
}
