import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Funcionarios {
Codigo: any;
Funcionarios: string;
CPF: string;
scan: string;
Scanficha: string;
DatadeAdmissao: string;
Status: string;
DatadaRescisao: string;
TipoRecsisao: string;
Mae: string;
Nascimento: string;
sexo: string;
EstadoCivil: string;
CTPS: string;
seriectps: string;
datactps: string;
UF: string;
Remuneracao: string;
ID: string;
DataEmissao: string;
OrgaoExpedidor: string;
UFexpedicao: string;
PIS: string;
endereco: string;
bairro: string;
cep: string;
municipio: string;
UFmoradia: string;
TelefonePessoal: string;
Ocupacao: string;
CBO: string;
Filiacao: string;
aposentado: string;
Areas: string;
Setor: string;
}

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private url = "https://www.cepelma.com.br/api_Funcioarios.php";
  constructor(
  private http: HttpClient,
              ) { 

}

getAll(){
  return this.http.get<[Funcionarios]>(this.url);
}

getAll2(){
  return this.http.get<[Funcionarios]>(this.url);
}

get(seq: string){
  return this.http.get<[Funcionarios]>(this.url + '?seq=' + seq);
}

create(funcionarios: Funcionarios){
  return this.http.post<[Funcionarios]>(this.url, funcionarios);
}

update(funcionarios: Funcionarios, seq: string){
  return this.http.put<[Funcionarios]>(this.url + '?seq=' + seq, funcionarios);
}

INATIVE(ID: String, funcionarios: Funcionarios){
  return this.http.post<[Funcionarios]>(this.url + '?Int=' + ID, funcionarios);
}

delete(seq: string){
  return this.http.delete<[Funcionarios]>(this.url + '?seq=' + seq);
}

}
