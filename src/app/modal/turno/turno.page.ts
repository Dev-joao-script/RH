import { Funcionarios, FuncionariosService } from 'src/app/service/funcionarios.service';
import { FeedService, Feed } from 'src/app/service/feed.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-turno',
  templateUrl: './turno.page.html',
  styleUrls: ['./turno.page.scss'],
})
export class TurnoPage implements OnInit {
  @Input() feed: Feed;
  isUpdate = false;

  dataSbt = {
    seq: '',
    Cod: '',
    Titulo: '',
    Descricao: '',
    Tipo: '',
    Data: '',
    Data_Dois:'',
    Hora_Um: '',
    Hora_Dois: '',
    Hora_Tres: '',
    Hora_Quatro: '',
    Hora_Cinco: '',
    Hora_Seis: '',
    Justificativa: '',
    ScanDoc: '',
    Data_Feed: '',
    Tratativa: '',
    view: '',
    view2: '',
    Nome: '',
  };

  funcionarios: Funcionarios[];
  Name = "Teste";
  valueB: string;
  valueA: string;
  Tipo = "TrocadeTurno.";
  Titulo = "Troca de Horario.";
  Descricao="Troca de Horario.";
  Justificativa ="NP";
  selected: any;

  KeyArray:any;
  KeyCpf:any;
  Token:string;
  URL: string;
  typeof: boolean;

  constructor(
    private modalCtrl: ModalController,
    private service: FeedService,
    private FuncionariosService: FuncionariosService,
    public http: Http,

    ) { }

  ngOnInit() {
    console.log(this.feed)
    this.FuncionariosService.getAll().subscribe(response => {
      this.funcionarios = response;
    })

    if (this.feed){
      this.isUpdate = true;
      this.dataSbt = this.feed;
      this.selected = this.dataSbt.Nome;
      this.valueA = this.dataSbt.Cod;
      this.valueB = this.dataSbt.Nome;
    }
  }

onSubmit(form: NgForm){
  console.log(this.typeof);
 const pendencia = form.value;
 pendencia.Justificativa = "NP"
 console.log(pendencia)
 
 if (this.isUpdate) {
    this.service.update(pendencia, this.feed.seq).subscribe(() => {
      pendencia.seq = this.feed.seq;
      this.modalCtrl.dismiss(pendencia, 'Updated');
    })
  }else{
    this.service.createnvs(pendencia).subscribe(
      response => {
        this.modalCtrl.dismiss(response, 'created');
      });

      
      for (let x = 0; x < this.funcionarios.length; x++) {
        if(this.valueA === this.funcionarios[x].Codigo){
          this.KeyCpf =  this.funcionarios[x].CPF
        }
      }

      let url: string = 'http://www.cepelma.com.br/loginAPP.php';
      this.http.get(url+'?user='+this.KeyCpf+'&Consult=OK')
      .pipe(map(res => res.json()))
      .subscribe(data => {
        console.log(data);
        const returndata = data;
        this.Token = data[0].Device_ID;
        this.URL = 'https://www.cepelma.com.br/Send.php';
        console.log(this.URL)

        let dArr = this.dataSbt.Data.split("-");  
        let DateNN  = dArr[2]+ "/" +dArr[1]+ "/" +dArr[0];

      const Mydata = {
        Token: this.Token,
        Text: pendencia.Descricao,
        Title: pendencia.Titulo,
        LargText: 'Troca de Horario ( trocado horario de '+this.dataSbt.Nome + 'Pelo horario de ' + this.dataSbt.Tratativa +') no dia ' + DateNN ,
        SImg: '',
        LImage: '',
      }

      if(!this.typeof){
      const Mydata = {
        Token: this.Token,
        Text: pendencia.Descricao,
        Title: pendencia.Titulo,
        LargText: 'Troca de Horario ( trocado horario de '+this.dataSbt.Nome + 'Pelo horario de ' + this.dataSbt.Tratativa +') no dia ' + DateNN ,
        SImg: '',
        LImage: '',
      }
      }else{
        const Mydata = {
          Token: this.Token,
          Text: pendencia.Descricao,
          Title: pendencia.Titulo,
          LargText: 'Troca de Horario no dia ' + DateNN ,
          SImg: '',
          LImage: '',
        }
      }
      this.typeof

      console.log(Mydata);

      let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' });
      var myData = JSON.stringify(Mydata);
      console.log(myData)

      console.log(this.URL)
      this.http.post(this.URL,myData)
      .subscribe(res => {
        console.log("Cadastro concluido!");
    }, (err) => {
        console.log("Cadastro concluido!");
      });

      });
  }


}

closeModal(){
  this.modalCtrl.dismiss(null, 'closed');
}

teste(racas: any) {
    this.Name = racas.detail.value;
    console.log(racas);
    const fn = this.Name.split("/");
    this.valueA = fn[0];
    this.valueB = fn[1];
    console.log(this.valueA);
    console.log(this.valueB);
    this.selected = fn[1];
}


ChangOpt(){

}

}
