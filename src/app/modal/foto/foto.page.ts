import { FuncionariosPage } from './../../funcionarios/funcionarios.page';
import { FuncionariosService } from './../../service/funcionarios.service';
import { Component, Input, OnInit, NgZone } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Funcionarios } from 'src/app/service/funcionarios.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})
export class FotoPage implements OnInit {
  @Input() Funcionarios: Funcionarios;
  isUpdate = false;
    SERVER_URL = "https://www.cepelma.com.br/DOCUMENTOS";
    uploadForm: FormGroup;  
    pictture: any;

    FuncionarioData = {
      Codigo: '',
      Funcionarios: '',
      CPF: '',
      scan: '',
      Scanficha: '',
      DatadeAdmissao: '',
      Status: '',
      DatadaRescisao: '',
      TipoRecsisao: '',
      Mae: '',
      Nascimento: '',
      sexo: '',
      EstadoCivil: '',
      CTPS: '',
      seriectps: '',
      datactps: '',
      UF: '',
      Remuneracao: '',
      ID: '',
      DataEmissao: '',
      OrgaoExpedidor: '',
      UFexpedicao: '',
      PIS: '',
      endereco: '',
      bairro: '',
      cep: '',
      municipio: '',
      UFmoradia: '',
      TelefonePessoal: '',
      Ocupacao: '',
      CBO: '',
      Filiacao: '',
      aposentado: '',
      Areas: '',
      Setor: '',
  };

  funcionarios: Funcionarios[];
  Name = "Teste";
  valueB: string;
  valueA: string;
  Tipo = "Falta_Batida";
  Titulo = "Batidas Incompletas.";
  Descricao="jornada incompleta, conforme relogio de ponto.";
  selected: any;
  selectedImage: any;
  imageUrl: any;

  constructor(
    private modalCtrl: ModalController,
    private service: FuncionariosService,
    private formBuilder: FormBuilder, 
    public http: Http,
    private https: HttpClient,
    public toastController: ToastController,
    public NgZone: NgZone
  ) { }

  ngOnInit() {
    if (this.Funcionarios){
    console.log(this.Funcionarios.scan)
    this.isUpdate = true;
    console.log(this.isUpdate);
    this.FuncionarioData = this.Funcionarios;
    }
    console.log(this.isUpdate);
    console.log(this.FuncionarioData);
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });

    this.pictture = "https://www.cepelma.com.br/IMAGENS/" + this.FuncionarioData.scan;
  }

  async presentToast(messageSignal:string) {
    const toast = await this.toastController.create({
      message: messageSignal,
      duration: 2000
    });
    toast.present();
  }

onSubmit(ID: string){
this.https.post(this.ip+'API_UPload.php?&Cod='+ID+"&Delete="+this.Funcionarios.scan,this.file_data)
.subscribe(res => {
console.log(res)
this.presentToast("Upload concluido");
}, (err) => {
console.log(err)
this.presentToast("Upload concluido");
this.modalCtrl.dismiss(this.ip+'API_UPload.php?&Cod='+ID, 'Updated');
});
}

closeModal(){
  this.modalCtrl.dismiss(null, 'closed');
}



Forcereload(){
  window.location.href = window.location.href
}

 onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

file = new FormControl('');
file_data:any = '';
fileChange(event) {
  const fileList: FileList = event.target.files;
  if (fileList.length > 0) {
      const file = fileList[0];
       console.log('finfo',file.name,file.size,file.type);
      if((file.size/1048576)<=4)
    {
      let formData = new FormData();
      let info={id:2,name:'raja'}
      formData.append('file', file, file.name);
      formData.append('id','2');
      formData.append('tz',new Date().toISOString())
      formData.append('update','2')
      formData.append('info',JSON.stringify(info))
      this.file_data=formData

      this.selectedImage = event.target.files[0];
      let reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.pictture = e.target.result;
      };
      this.NgZone.run(() => {
        this.pictture = this.pictture;
      });

      reader.readAsDataURL(this.selectedImage);
    }
        
      }else{
        
      }
      
  }
ip="https://www.cepelma.com.br/"

uploadFile()
{
let justifi = this.FuncionarioData.Funcionarios;
let ID = this.FuncionarioData.Codigo;
    this.https.post(this.ip+'justify.php?justifi='+justifi+'&ID='+ID,this.file_data)
    .subscribe(() => {
  this.modalCtrl.dismiss('Sucess');
  this.presentToast("Alterado com sucesso!")
    },() => {
  this.modalCtrl.dismiss('Error');
  this.presentToast("Erro Durante o envio, Tente Novamente.")
});
  }
}

