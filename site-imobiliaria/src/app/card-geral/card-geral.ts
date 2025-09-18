import { Component, Input } from '@angular/core';
import { ImovelCard } from '../interfaces/imovel.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-geral',
  imports: [CommonModule, RouterModule],
  templateUrl: './card-geral.html',
  styleUrl: './card-geral.css',
})
export class CardGeral {
  @Input() cards!: ImovelCard;

  constructor(private router: Router) {}

  favoritar(codigo?: number) {
    // Implemente a lógica de favoritar aqui
    alert('Favoritado: ' + codigo);
  }

  verDetalhes(): void {
    if (this.cards && this.cards.codigo) {
      this.router.navigate(['/imovel', this.cards.codigo]);
    }
  }
}
