import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  buscarTiposImoveis(): Observable<any> {
    return this.http.get<any>(this.url + '/RetornarTiposImoveisDisponiveis', {
      headers: this.headers,
    });
  }
}
