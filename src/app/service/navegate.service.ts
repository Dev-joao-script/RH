import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface cont_cheques {
Codigo: any;
Funcionario: string;
Periodo: string;
Tipo: string;
scan: string;
Ano: string;
seq: string;
}

export interface car_ponto{
  Codigo: any;
  Funcionario: string;
  Periodo: string;
  scan: string;
  seq: string; 
}

export interface ferias{
  Codigo: string;
  Funcionario: string;
  Inicio_perioro: string;
  Termino_periodo: string;
  Tipo_Ferias: string;
  Dias: string;
  Aviso_de_Ferias: string;
  Recibo_de_Ferias: string;
  seq: string;
}

export interface atestados{
  Codigo: string;
  Funcionario: string;
  Data_Inicio: string;
  Data_Fim: string;
  Sid: string;
  Dias: string;
  Motivo: string;
  seq: string;
}



@Injectable({
  providedIn: 'root'
})
export class NavegateService {
  private url = "https://www.cepelma.com.br/api_Navegate.php";
  constructor(
  private http: HttpClient,
              ) { }

getAll(){
  return this.http.get<[cont_cheques]>(this.url);
}

get(seq: string){
  return this.http.get<[cont_cheques]>(this.url + '?seq=' + seq);
}

getduo(seq: string){
  return this.http.get<[car_ponto]>(this.url + '?ctp=' + seq);
}
getfer(seq: string){
  return this.http.get<[ferias]>(this.url + '?fer=' + seq);
}
getate(seq: string){
  return this.http.get<[atestados]>(this.url + '?ate=' + seq);
}

create(cont_cheques: cont_cheques){
  return this.http.post<[cont_cheques]>(this.url, cont_cheques);
}

update(cont_cheques: cont_cheques, seq: string){
  return this.http.put<[cont_cheques]>(this.url + '?seq=' + seq, cont_cheques);
}

INATIVE(ID: String, cont_cheques: cont_cheques){
  return this.http.post<[cont_cheques]>(this.url + '?Int=' + ID, cont_cheques);
}

delete(seq: string){
  return this.http.delete<[cont_cheques]>(this.url + '?seq=' + seq);
}

}
