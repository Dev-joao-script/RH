import { FuncionariosService } from './../../service/funcionarios.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Funcionarios } from 'src/app/service/funcionarios.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-funcionarios-modal',
  templateUrl: './view-funcionarios-modal.page.html',
  styleUrls: ['./view-funcionarios-modal.page.scss'],
})
export class ViewFuncionariosModalPage implements OnInit {
  @Input() Funcionarios: Funcionarios;
  isUpdate = false;


    SERVER_URL = "https://www.cepelma.com.br/DOCUMENTOS";
    uploadForm: FormGroup;  

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

  constructor(
    private modalCtrl: ModalController,
    private service: FuncionariosService,
    private formBuilder: FormBuilder, 
    private httpClient: HttpClient
    ) { }

  ngOnInit() {
    if (this.Funcionarios){
      this.isUpdate = true;
      this.FuncionarioData = this.Funcionarios;
    }
    console.log(this.isUpdate);
    console.log(this.FuncionarioData);

    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

onSubmit(form: NgForm){ 
 const pendencia = form.value;
 pendencia.Status="Ativo";
 if (this.isUpdate) {
    this.service.update(pendencia, this.FuncionarioData.Codigo).subscribe(() => {
      pendencia.seq = this.FuncionarioData.Codigo;
      this.modalCtrl.dismiss(pendencia, 'Updated');
    })
  }else{
    console.log(pendencia)
    pendencia.scan="Sem Foto no Perfil.jpg";
    this.service.create(pendencia).subscribe(
      response => {
        this.modalCtrl.dismiss(response, 'created');
      });
  }
}

closeModal(){
  this.modalCtrl.dismiss(null, 'closed');
}

 onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
}
