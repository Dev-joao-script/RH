import { PontoPage } from './../ponto/ponto.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { PagamentosPage } from '../pagamentos/pagamentos.page';
import { PontoLotePage } from '../ponto-lote/ponto-lote.page';
import { PagamentosLotePage } from '../pagamentos-lote/pagamentos-lote.page';
import { Location } from '@angular/common'

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {

  constructor(public router: Router,    
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private location: Location,
    ) { }

  ngOnInit() {

  }
  GoenCC(){
    console.log()
      this.alertCtrl.create({
        header: 'Visualizar',
        message: 'Deseja Enviar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PagamentosPage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
              if (role === 'created') {
                console.log(data)
              }
            });
  
           }
        },
        { text: 'Não' }
      ]
      })
      .then(alertEl => alertEl.present())
  }

  GoenCp(){
    console.log()
      this.alertCtrl.create({
        header: 'Visualizar',
        message: 'Deseja Enviar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PontoPage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
              if (role === 'created') {
                console.log(data)
              }
            });
  
           }
        },
        { text: 'Não' }
      ]
      })
      .then(alertEl => alertEl.present())
  }
  
  Back(): void {
    this.location.back()
  }

  GoenCpL(){
    
    console.log()
      this.alertCtrl.create({
        header: 'Visualizar',
        message: 'Deseja Enviar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PontoLotePage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
              if (role === 'created') {
                console.log(data)
              }
            });
  
           }
        },
        { text: 'Não' }
      ]
      })
      .then(alertEl => alertEl.present())
  }

  
  GoenCCL(){
    console.log()
      this.alertCtrl.create({
        header: 'Visualizar',
        message: 'Deseja Enviar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PagamentosLotePage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
              if (role === 'created') {
                console.log(data)
              }
            });
  
           }
        },
        { text: 'Não' }
      ]
      })
      .then(alertEl => alertEl.present())
  }


}
