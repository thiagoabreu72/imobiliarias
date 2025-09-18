import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseBairros, ApiResponseCidades, ApiResponseTiposImovel, FiltrosBairrosRequest, FiltrosCidadesRequest, FiltrosImoveisRequest } from '../interfaces/filtros.interface';
import { ApiResponseImovel } from '../interfaces/imovel.interface';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private url = 'https://api.imoview.com.br/Imovel';
  private apiKey = '8bf690fbeba82ac6e2bd3179cc301507';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    chave: this.apiKey,
  });

  constructor(private http: HttpClient) { }

  buscarTiposImoveis(): Observable<ApiResponseTiposImovel> {
    return this.http.get<ApiResponseTiposImovel>(this.url + '/RetornarTiposImoveisDisponiveis', {
      headers: this.headers,
    });
  }

  buscarCidades(filtros: FiltrosCidadesRequest): Observable<ApiResponseCidades> {
    return this.http.post<ApiResponseCidades>(`${this.url}/RetornarCidadesDisponiveis`, filtros, {
      headers: this.headers
    })
  }

  buscarImoveisFiltrados(filtros: FiltrosImoveisRequest): Observable<ApiResponseImovel> {
    return this.http.post<ApiResponseImovel>(`${this.url}/RetornarImoveisDisponiveis`, filtros, {
      headers: this.headers
    });
  }

  buscarBairros(filtros: FiltrosBairrosRequest): Observable<ApiResponseBairros> {
    return this.http.post<ApiResponseBairros>(`${this.url}/RetornarBairrosDisponiveis`, filtros, {
      headers: this.headers
    });
  }

  buscarDetalhesImovel(codigoImovel: number): Observable<any> {
    const params = { codigoImovel: String(codigoImovel) };
    
    return this.http.get<any>(`${this.url}/RetornarDetalhesImovelDisponivel`, {
      headers: this.headers,
      params: params
    })
  }

}
