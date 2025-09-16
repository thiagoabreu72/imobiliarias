import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ImovelCard } from '../../interfaces/imovel.interface';

@Component({
  selector: 'app-card-imovel',
  imports: [CommonModule],
  templateUrl: './card-imovel.html',
  styleUrl: './card-imovel.css',
})
export class CardImovel implements OnInit {
  @Input() cards: ImovelCard[] = [];

  visibleCards!: any;
  startIndex = 0;

  ngOnInit(): void {
    this.visibleCards = this.cards.slice(0, 4);
    console.log(this.cards)
    console.log(this.visibleCards)
  }

  favoritar(codigo: number) {
    // Implemente a lógica de favoritar aqui
    alert('Favoritado: ' + codigo);
  }
}
