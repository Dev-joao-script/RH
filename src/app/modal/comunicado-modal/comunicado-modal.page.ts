import { Funcionarios, FuncionariosService } from 'src/app/service/funcionarios.service';
import { FeedService, Feed } from 'src/app/service/feed.service';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UploadService } from  'src/app/upload.service';
import { AppComponent } from 'src/app/app.component';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-comunicado-modal',
  templateUrl: './comunicado-modal.page.html',
  styleUrls: ['./comunicado-modal.page.scss'],
})
export class ComunicadoModalPage implements OnInit {
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
  Tipo = "Comunicado.";
  Titulo = "Comunicado pessoal.";
  Descricao="";
  selected: any;

  justtext: any;
  sourseresolve: any;
  url = 'https://www.cepelma.com.br/';
  SERVER_URL = "http://www.cepelma.com.br/DOCUMENTOS/";
  uploadForm: FormGroup;
  basepath = "http://localhost"; 
  file = new FormControl('');
  file_data:any = '';
  KeyArray:any;
  KeyCpf:any;
  Token:string;
  URL: string;

  constructor(
    private modalCtrl: ModalController,
    private service: FeedService,
    private FuncionariosService: FuncionariosService,
    public router: Router,
    private formBuilder: FormBuilder, 
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

    this.uploadForm = this.formBuilder.group({
      File: ['']
    });
  }

onSubmit(form: NgForm){
 const pendencia = form.value;
 if (this.isUpdate) {
    this.service.update(pendencia, this.feed.seq).subscribe(() => {
      pendencia.seq = this.feed.seq;
      this.modalCtrl.dismiss(pendencia, 'Updated');
    })
  }else{
    this.service.createPnt(pendencia).subscribe(
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
        LargText: pendencia.Descricao,
        SImg: '',
        LImage: '',
      }

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


fileChange(event) {
  const fileList: FileList = event.target.files;
  //check whether file is selected or not
  if (fileList.length > 0) {

      const file = fileList[0];
      //get file information such as name, size and type
      console.log('finfo',file.name,file.size,file.type);
      //max file size is 4 mb
      if((file.size/1048576)<=4)
      {
        let formData = new FormData();
        let info={id:2,name:'raja'}
        formData.append('file', file, file.name);
        formData.append('id','2');
        formData.append('tz',new Date().toISOString())
        formData.append('update','2')
        formData.append('info',JSON.stringify(info))
        this.feed.ScanDoc=formData
      }else{
        //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
      }
     
  }

}

}
