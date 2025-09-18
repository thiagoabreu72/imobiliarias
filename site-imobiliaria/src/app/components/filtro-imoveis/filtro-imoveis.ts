import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, map, Observable, of, startWith, Subscription, switchMap, tap } from 'rxjs';
import { Bairro, Cidade, TipoImovel } from '../../interfaces/filtros.interface';
import { CommonModule } from '@angular/common';
import { MultiSelectDropdownComponent } from '../multi-select-dropdown.component/multi-select-dropdown.component';
import { Service } from '../../services/service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-filtro-imoveis',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultiSelectDropdownComponent,
    RouterModule
  ],
  templateUrl: './filtro-imoveis.html',
  styleUrl: './filtro-imoveis.css'
})
export class FiltroImoveis implements OnInit, OnDestroy {

  @Input() finalidade!: 1 | 2;
  @Output() filtrosChange = new EventEmitter<any>();

  filtroForm: FormGroup;

  tiposImovel$!: Observable<TipoImovel[]>;
  cidades$ = new BehaviorSubject<Cidade[]>([]);
  bairros$ = new BehaviorSubject<Bairro[]>([]);
  private subscriptions = new Subscription();

  opcoesQuartos = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4+', value: 4 } // O label é '4+', mas o valor é 4
  ];

  opcoesBanheiros = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4+', value: 4 }
  ];

  opcoesVagas = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4+', value: 4 }
  ];

  opcoesSuites = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4+', value: 4 }
  ];

  constructor(private fb: FormBuilder, private service: Service) {
    this.filtroForm = this.fb.group({
      codigoTipo: [[]],
      codigocidade: [null],
      codigosbairros: [[]],
      numeroquartos: [null],
      numerobanhos: [null],
      numerovagas: [null],
      numerosuites: [null],
      valorde: [''],
      valorate: [''],
    });
  }

  ngOnInit(): void {
    this.iniciarFiltrosEmCascata();
  }

  private iniciarFiltrosEmCascata(): void {
    this.tiposImovel$ = this.service.buscarTiposImoveis().pipe(map(res => res.lista));

    const cidadesSub = this.service.buscarCidades({})
      .pipe(map(res => res.lista))
      .subscribe(cidades => {
        this.cidades$.next(cidades);
        this.escutarMudancasDeCidade();
      });
    this.subscriptions.add(cidadesSub);
  }

  private escutarMudancasDeCidade(): void {
    const cidadeControl = this.filtroForm.get('codigocidade');
    if (cidadeControl) {
      const bairrosSub = cidadeControl.valueChanges.pipe(
        startWith(cidadeControl.value),
        tap(() => this.filtroForm.get('codigosbairros')?.setValue([], { emitEvent: false })),
        switchMap(codigoCidade => {
          if (!codigoCidade) {
            console.log("Nenhuma cidade selecionada, limpando bairros.");
            return of({ lista: [] });
          }
          console.log(`Buscando bairros para a cidade com código: ${codigoCidade}`);
          return this.service.buscarBairros({ codigoCidade: String(codigoCidade) });
        }),
        map(response => response.lista)
      ).subscribe(listaDeBairros => {
        console.log("Bairros recebidos:", listaDeBairros);
        this.bairros$.next(listaDeBairros);
      });
      this.subscriptions.add(bairrosSub);
    }
  }

  buscar(): void {
    this.filtrosChange.emit(this.filtroForm.value);
  }

  toggleSelecaoMultipla(controlName: string, value: any): void {
    const control = this.filtroForm.get(controlName);
    if (!control) return;
    let currentValue = (control.value as any[]) || [];
    if (currentValue.includes(value)) {
      currentValue = currentValue.filter(item => item !== value);
    } else {
      currentValue = [...currentValue, value];
    }
    control.setValue(currentValue);
  }

  toggleSelecaoUnica(controlName: string, value: any): void {
    const control = this.filtroForm.get(controlName);
    if (!control) return;
    control.value === value ? control.setValue(null) : control.setValue(value);
  }

  isAtivoMulti(controlName: string, value: any): boolean {
    const control = this.filtroForm.get(controlName);
    return control ? control.value.includes(value) : false;
  }

  isAtivoUnico(controlName: string, value: any): boolean {
    const control = this.filtroForm.get(controlName);
    return control ? control.value === value : false;
  }

  onValorChange(event: Event, controlName: 'valorde' | 'valorate'): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const numeric = value.replace(/\D/g, '');
    if (!numeric) { this.filtroForm.get(controlName)?.setValue(''); return; }
    const number = parseInt(numeric, 10) / 100;
    const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
    this.filtroForm.get(controlName)?.setValue(formatted, { emitEvent: false });
    input.value = formatted;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
