import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imovel-destaque',
  imports: [CommonModule],
  templateUrl: './imovel-destaque.html',
  styleUrl: './imovel-destaque.css'
})
export class ImovelDestaque {
  getFimIntervalo(): number {
    return Math.min(this.startIndex + this.visibleCards.length, this.cards.length);
  }
  cards = [
    {
      codigo: 20257,
      imgs: [
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200'
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0
    },
    {
      codigo: 20254,
      imgs: [
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200'
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0
    },
    {
      codigo: 20243,
      imgs: [
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200'
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0
    },
    {
      codigo: 20275,
      imgs: [
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200'
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0
    },
    {
      codigo: 20298,
      imgs: [
        'https://cdn.imoview.com.br/portosegurost/Imoveis/9370/jl-ut-fachada-noite-ef.jpg?1749149994',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200'
      ],
      localizacao: 'Centro | Cascavel',
      titulo: 'Apartamento à venda no Centro',
      preco: 'R$ 1.570.000,00',
      area: '169,73 m²',
      quartos: 2,
      vagas: 3,
      banhos: 0
    }
  ];

  visibleCards = this.cards.slice(0, 4);
  startIndex = 0;

  nextCard() {
    if (this.startIndex + 4 < this.cards.length) {
      this.startIndex++;
      this.visibleCards = this.cards.slice(this.startIndex, this.startIndex + 4);
    }
  }

  prevCard() {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.visibleCards = this.cards.slice(this.startIndex, this.startIndex + 4);
    }
  }

  favoritar(codigo: number) {
    // Implemente a lógica de favoritar aqui
    alert('Favoritado: ' + codigo);
  }
}
