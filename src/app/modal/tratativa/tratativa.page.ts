import { Observable } from 'rxjs';
import { Funcionarios, FuncionariosService } from 'src/app/service/funcionarios.service';
import { FeedService, Feed } from 'src/app/service/feed.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { IonDatetime, ModalController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-tratativa',
  templateUrl: './tratativa.page.html',
  styleUrls: ['./tratativa.page.scss'],
})
export class TratativaPage implements OnInit {
  @Input() feed: Feed;
  @Input() Mod: String;
  @Input() Responsavel: any;
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
  Tipo = "Ferias.";
  Titulo = "Previsão de Férias.";
  Descricao="Data Limite das férias previsto.";
  selected: any;
  Time: IonDatetime;
  data: string;
  optionsOn: boolean;
  Opt: any;
  Outhers: string;

  constructor(
    private modalCtrl: ModalController,
    private service: FeedService,
    private FuncionariosService: FuncionariosService,
    public toastController: ToastController
    ) {}

  async presentToast(messageSignal:string) {
    const toast = await this.toastController.create({
      message: messageSignal,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.optionsOn = false;
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
    this.dataSbt.Tratativa = "";
    this.dataSbt.view2 =  new Date().toISOString();
    console.log(this.Responsavel);
    this.dataSbt.view = decodeURI(this.Responsavel);
    this.dataSbt.view = decodeURIComponent(this.dataSbt.view)
  }

onSubmit(form: NgForm){
if (this.optionsOn == true) {
this.dataSbt.Tratativa = this.Outhers;
}
 const pendencia = form.value;
 console.log(pendencia);
 if (this.dataSbt.Tratativa == '' && !this.dataSbt.Tratativa) {
  this.presentToast("selecione uma Opção")
 }else{
  if (this.isUpdate) {
    this.service.updateTrt(pendencia, this.feed.seq).subscribe(() => {
      pendencia.seq = this.feed.seq;
      this.modalCtrl.dismiss(pendencia, 'Updated');
      this.presentToast("Registro Tratado")
      
    })
  }
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

dataHoje() {
            var data = new Date();
            var dia = data.getDate();
            var mes = data.getMonth() + 1;
            var ano = data.getFullYear();
            return [dia, mes, ano].join('/');
        }

        ChangOpt(){
        this.dataSbt.Tratativa = "";
        }

        ChangOthers(){
          this.optionsOn = false;
        }
}

