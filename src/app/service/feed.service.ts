import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Feed {
  seq: string;
  Cod: string;
  Titulo: string;
  Descricao: string;
  Tipo: string;
  Data: string;
  Data_Dois: string;
  Hora_Um: string;
  Hora_Dois: string;
  Hora_Tres: string;
  Hora_Quatro: string;
  Hora_Cinco: string;
  Hora_Seis: string;
  Justificativa: string;
  ScanDoc: any;
  Data_Feed: string;
  Tratativa: string;
  view: string;
  view2: string;
  Nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedService {

    private url = "https://www.cepelma.com.br/api.php";

    constructor(
    private http: HttpClient,
  ) { }

  getAll(){
    return this.http.get<[Feed]>(this.url);
  }

  getAllModJ(){
    return this.http.get<[Feed]>(this.url + '?Jtf=True');
  }

  getAllCncl(){
    return this.http.get<[Feed]>(this.url + '?Cnl=True');
  }

  get(seq: string){
    return this.http.get<[Feed]>(this.url + '?cod=' + seq);
  }

  create(feed: Feed){
    return this.http.post<[Feed]>(this.url, feed);
  }

  createPnt(feed: Feed){
    return this.http.post<[Feed]>(this.url + '?Btd=true', feed);
  }
  
  createnvs(feed: Feed){
    return this.http.post<[Feed]>(this.url + '?nvs=true', feed);
  }

  update(feed: Feed, seq: string){
    return this.http.put<[Feed]>(this.url + '?seq=' + seq, feed);
  }

  updateTrt(feed: Feed, seq: string){
    return this.http.put<[Feed]>(this.url + '?Trt=' + seq, feed);
  }

  delete(seq: string){
    return this.http.delete<[Feed]>(this.url + '?seq=' + seq);
  }

}
