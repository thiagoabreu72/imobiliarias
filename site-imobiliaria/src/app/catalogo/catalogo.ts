import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGeral } from '../card-geral/card-geral';
import { MultiSelectDropdownComponent } from '../components/multi-select-dropdown.component/multi-select-dropdown.component';
import { FormsModule } from '@angular/forms';
import { Service } from '../services/service';

@Component({
  selector: 'app-catalogo',
  imports: [CardGeral, CommonModule, MultiSelectDropdownComponent, FormsModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  constructor(private service: Service) {
    this.service.buscarTiposImoveis().subscribe((data) => {
      this.tipoImovel = data;
      console.log(this.tipoImovel);
    });
  }

  tipoImovelOptions = [
    { label: 'Apartamento', value: 'apartamento' },
    { label: 'Casa', value: 'casa' },
    { label: 'Lote', value: 'lote' },
  ];
  cidadesOptions = [
    { label: 'São Paulo', value: 'sao-paulo' },
    { label: 'Rio de Janeiro', value: 'rio-de-janeiro' },
    { label: 'Brasília', value: 'brasilia' },
  ];
  quantidadeQuartos = [
    { label: '1 quarto', value: '1' },
    { label: '2 quartos', value: '2' },
    { label: '3 quartos', value: '3' },
    { label: '+4 quartos', value: '4' },
  ];
  quantidadeBanheiros = [
    { label: '1 banheiro', value: '1' },
    { label: '2 banheiros', value: '2' },
    { label: '3 banheiros', value: '3' },
    { label: '+4 banheiros', value: '4' },
  ];
  tipoImovel = [
    { label: 'Apartamento', value: 'apartamento' },
    { label: 'Casa', value: 'casa' },
    { label: 'Lote', value: 'lote' },
  ];
  valorInicial: string = '';
  valorFinal: string = '';

  // montar máscara no formato 0,00 e exibir em tempo real
  mascaraValor(value: string, tipo: string) {
    const numeric = value.replace(/\D/g, '');
    const number = parseInt(numeric || '0', 10) / 100;
    const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      number
    );

    // atualiza o valor visível formatado
    if (tipo == 'I') this.valorInicial = formatted;
    else this.valorFinal = formatted;
  }

  buscar() {
    console.log('Buscar');
  }
}
