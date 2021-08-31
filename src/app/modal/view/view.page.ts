import { Funcionarios, FuncionariosService } from 'src/app/service/funcionarios.service';
import { FeedService, Feed } from 'src/app/service/feed.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Platform } from  '@ionic/angular';
import { Cordova } from '@ionic-native/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  @Input() feed: Feed;

  dataSbt = {
    seq: '',
    Cod: '',
    Titulo: '',
    Descricao: '',
    Tipo: '',
    Data: '',
    Hora_Um: '',
    Hora_Dois: '',
    Hora_Tres: '',
    Hora_Quatro: '',
    Hora_Cinco: '',
    Hora_Seis: '',
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
  Tipo = "Atraso.";
  Titulo = "Jornada de Trabalho Inferior.";
  Descricao="jornada incompleta, conforme marcações no relogio.";
  selected: any;

  constructor(
    private modalCtrl: ModalController,
    private service: FeedService,
    private FuncionariosService: FuncionariosService,
    public previewAnyFile: PreviewAnyFile,
    public Platform: Platform
    ) { }


  ngOnInit() {
  if (this.feed){
  this.dataSbt = this.feed;
  }
  }

closeModal(){
  this.modalCtrl.dismiss(null, 'closed');
}

preview(DocV: any){
  if (this.Platform.is('cordova')) {
    var url ='http://www.cepelma.com.br/DOCUMENTOS/';
    const Strn: any = url+DocV;
    const encoded = encodeURI(Strn);
    this.previewAnyFile.preview(encoded).then(() =>
    {
    }, (err) => {
      alert(JSON.stringify(err));
    }
    )
  }else{
    window.open('http://www.cepelma.com.br/DOCUMENTOS/'+DocV, '_system', 'location=yes');
     return false;
  }
}
}
