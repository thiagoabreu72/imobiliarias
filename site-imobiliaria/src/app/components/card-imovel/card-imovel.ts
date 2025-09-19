import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ImovelCard } from '../../interfaces/imovel.interface';

@Component({
  selector: 'app-card-imovel',
  imports: [CommonModule],
  templateUrl: './card-imovel.html',
  styleUrl: './card-imovel.css',
})
export class CardImovel {
  @Input() cards: ImovelCard[] = [];

  // ...existing code...

  favoritar(codigo: number) {
    // Implemente a lógica de favoritar aqui
    alert('Favoritado: ' + codigo);
  }
}
