import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGeral } from '../card-geral/card-geral';
import { MultiSelectDropdownComponent } from '../components/multi-select-dropdown.component/multi-select-dropdown.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Service } from '../services/service';
import { BehaviorSubject, map, Observable, startWith, Subscription, switchMap, tap } from 'rxjs';
import { Cidade, FiltrosCidadesRequest, FiltrosImoveisRequest, TipoImovel } from '../interfaces/filtros.interface';
import { ApiResponseMapeada, ImovelCard, ImovelResponse } from '../interfaces/imovel.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FiltroImoveis } from "../components/filtro-imoveis/filtro-imoveis";

@Component({
  selector: 'app-catalogo',
  imports: [CardGeral, CommonModule, ReactiveFormsModule, RouterModule, FiltroImoveis],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {

  finalidade!: 1 | 2;
  tituloPagina!: string;
  currentPage = 1;
  resultadoBusca$!: Observable<ApiResponseMapeada>;

  private ultimosFiltros: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: Service
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.finalidade = data['finalidade'];
      this.tituloPagina = data['titulo'];
      this.onFiltrosChange({});
    });
  }

  onFiltrosChange(filtrosDoFormulario: any, resetPage: boolean = true): void {
    if (resetPage) {
      this.currentPage = 1;
    }
    this.ultimosFiltros = filtrosDoFormulario; 

    const codigoTipoString = (filtrosDoFormulario.codigoTipo as any[])?.join(',') || '';
    const codigosBairrosString = (filtrosDoFormulario.codigosbairros as any[])?.join(',') || '';

    const filtrosParaApi: FiltrosImoveisRequest = {
      finalidade: this.finalidade,
      numeropagina: this.currentPage,
      numeroregistros: 12,
      codigoTipo: codigoTipoString,
      codigocidade: filtrosDoFormulario.codigocidade || 0,
      codigosbairros: codigosBairrosString,
      numeroquartos: filtrosDoFormulario.numeroquartos || 0,
      numerobanhos: filtrosDoFormulario.numerobanhos || 0,
      numerovagas: filtrosDoFormulario.numerovagas || 0,
      valorde: this.parseCurrency(filtrosDoFormulario.valorde),
      valorate: this.parseCurrency(filtrosDoFormulario.valorate),
    };

    this.resultadoBusca$ = this.service.buscarImoveisFiltrados(filtrosParaApi).pipe(
      map(responseDaApi => ({
        ...responseDaApi,
        lista: responseDaApi.lista.map(imovel => this.mapearImovelParaCard(imovel))
      }))
    );
  }

  proximaPagina(): void {
    this.currentPage++;
    this.onFiltrosChange(this.ultimosFiltros, false);
  }

  paginaAnterior(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.onFiltrosChange(this.ultimosFiltros, false);
    }
  }

  private mapearImovelParaCard(imovel: ImovelResponse): ImovelCard {
    return {
      codigo: imovel.codigo,
      imgs: [imovel.urlfotoprincipal, ...imovel.fotos.slice(0, 4).map(f => f.url)],
      localizacao: `${imovel.bairro} | ${imovel.cidade}`,
      titulo: imovel.titulo,
      preco: imovel.valor,
      area: `${imovel.areainterna} m²`,
      quartos: parseInt(imovel.numeroquartos, 10) || 0,
      vagas: parseInt(imovel.numerovagas, 10) || 0,
      banhos: parseInt(imovel.numerobanhos, 10) || 0,
    };
  }

  private parseCurrency(value: string | null): number | undefined {
    if (!value) return undefined;
    const numeric = value.replace(/\D/g, '');
    if (!numeric) return undefined;
    return parseInt(numeric, 10) / 100;
  }
}
