import { ficha_epi, FichaEpiService } from './../../service/ficha-epi.service';
import { Funcionarios, FuncionariosService } from 'src/app/service/funcionarios.service';
import { FeedService, Feed } from 'src/app/service/feed.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';let fichas_epi = {
  seq: "",
  cod: "",
  cpf: "",
  calcado: "",
  luvas: "",
  olhos: "",
  ouvidos: "",
  dorso: "",
  pescoco: "",
  pernas: "",
  bracos: "",
  cabeca: "",
  uniforme: "",
  cinto: "",
  acessorio: "",
} ;

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.page.html',
  styleUrls: ['./ficha.page.scss'],
})
export class FichaPage implements OnInit {
  @Input() funcionarioIndex: string;
  isUpdate = false;
  ficha_epi: any;
  funcionarios: Funcionarios[];
  
  Name = "Teste";
  valueB: string;
  valueA: string;
  Tipo = "Falta.";
  Titulo = "Falta.";
  Descricao = "Ausente na jornada de trabalho.";
  selected: any;

  KeyArray: any;
  KeyCpf: any;
  Token: string;
  URL: string;
  FuncionarioCPF: Funcionarios;
  acessorio: string;
  uniforme: string;
  cinto: string;
  cabeca: string;
  bracos: string;
  pernas: string;
  pescoco: string;
  dorso: string;
  ouvidos: string;
  olhos: string;
  luvas: string;
  calcado: string;
  cpf: string;
  cod: string;
  seq:any

  constructor(
    private modalCtrl: ModalController,
    private service: FichaEpiService,
    private FuncionariosService: FuncionariosService,
    public http: Http,

  ) {

    this.isUpdate = false

   }

  ngOnInit() {
    
    let id = this.funcionarioIndex;
    id = id.replace('.','');
    id = id.replace('.','');
    id = id.replace('-','');
    this.funcionarioIndex = id;
    console.log(this.funcionarioIndex);
    this.service.get(id).subscribe(response => {

      if (response[0]) {
        console.log("tem dados")
        this.isUpdate = true;
        this.ficha_epi = response;
        console.log(this.ficha_epi)
        console.log(this.isUpdate)
      }else{
        console.log("não tem dados")
        this.isUpdate = false

      }


    })
    
  }


  onSubmit(form: NgForm) {
    let pendencia = form.value;
    if (this.isUpdate) {
      this.service.update(pendencia, this.funcionarioIndex).subscribe(() => {
        pendencia.cpf = this.funcionarioIndex;
        this.modalCtrl.dismiss(pendencia, 'Updated');
      })
    } else {
      this.service.create(pendencia).subscribe(() => {
          this.modalCtrl.dismiss(pendencia, 'created');
        });
    }
  }
  closeModal() {
    this.modalCtrl.dismiss(null, 'closed');
  }

}
