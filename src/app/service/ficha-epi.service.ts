import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface ficha_epi {
  seq: string;
  cod: string;
  cpf: string;
  calcado: string;
  luvas: string;
  olhos: string;
  ouvidos: string;
  dorso: string;
  pescoco: string;
  pernas: string;
  bracos: string;
  cabeca: string;
  uniforme: string;
  cinto: string;
  acessorio: string;
}


@Injectable({
  providedIn: 'root'
})
export class FichaEpiService {
  private url = "https://www.cepelma.com.br/api_ficha.php";
  constructor(
  private http: HttpClient,
              ) { }

getAll(){
  return this.http.get<[ficha_epi]>(this.url);
}

getAll2(){
  return this.http.get<[ficha_epi]>(this.url);
}

get(cod: string){
  return this.http.get<[ficha_epi]>(this.url + '?Cod=' + cod);
}

create(ficha_epi: ficha_epi){
  return this.http.post<[ficha_epi]>(this.url, ficha_epi);
}

createnew(cpf: String){
  return this.http.post<[ficha_epi]>(this.url + '?cpf=' + cpf, cpf);
}

update(ficha_epi: ficha_epi, seq: string){
  return this.http.put<[ficha_epi]>(this.url + '?seq=' + seq, ficha_epi);
}

INATIVE(ID: String, ficha_epi: ficha_epi){
  return this.http.post<[ficha_epi]>(this.url + '?Int=' + ID, ficha_epi);
}

delete(seq: string){
  return this.http.delete<[ficha_epi]>(this.url + '?seq=' + seq);
}

}
