export interface TipoImovel {
  codigo: number;
  nome: string;
}

export interface ApiResponseTiposImovel {
  quantidade: number;
  lista: TipoImovel[];
}

export type Finalidade = 1 | 2;

export interface FiltrosImoveisRequest {
  // Parâmetros opcionais p/ filtros
  codigoTipo?: string;
  codigocidade?: number
  numeroquartos?: number;
  numerobanhos?: number;
  valorde?: number;
  valorate?: number;
  codigosbairros?: string;
  numerovagas?: number;
  // Parâmetros obrigatórios de consulta/paginação
  finalidade: Finalidade
  numeropagina: number;
  numeroregistros: number;
}

export interface Cidade {
  codigo: number; 
  nome: string;
  estado: string; 
}

export interface ApiResponseCidades {
  quantidade: number;
  lista: Cidade[];
}

export interface FiltrosCidadesRequest {
  finalidade?: 1 | 2 | 0;     
  codigoTipo?: string;        
  codigoUnidade?: string;     
  opcaoImovel?: 0 | 1 | 2 | 3 | 4; 
  estado?: string;            
}

export interface FiltrosBairrosRequest {
  finalidade?: 1 | 2 | 0;
  codigoTipo?: string;
  codigoCidade?: string; // Pode ser '123' ou '123,456'
  codigoRegiao?: string;
  codigoSubRegiao?: string;
  codigoUnidade?: string;
  opcaoImovel?: 0 | 1 | 2 | 3 | 4;
}

export interface Bairro {
  codigo: number;
  nome: string;
  cidade: string;
  estado: string;
  regiao: string;
  subregiao: string;
}

export interface ApiResponseBairros {
  quantidade: number;
  lista: Bairro[];
}

