import { FichaPage } from './../modal/ficha/ficha.page';
import { FichaPageModule } from './../modal/ficha/ficha.module';
import { ViewFuncionariosModalPage } from './../modal/view-funcionarios-modal/view-funcionarios-modal.page';
import { FuncionarioModalPage } from './../modal/funcionario-modal/funcionario-modal.page';
import { FuncionariosService, Funcionarios } from './../service/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Location } from '@angular/common'
import { FotoPage } from '../modal/foto/foto.page';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { NavegadorPage } from '../arquivo/navegador/navegador.page';


@Component({
  selector: 'app-seguranca',
  templateUrl: './seguranca.page.html',
  styleUrls: ['./seguranca.page.scss'],
})
export class SegurancaPage implements OnInit {
  isLoading = false;
  Funcionarios: Funcionarios[];
  url: string = "https://www.cepelma.com.br/";
  menbros: any;
  routerHome: string;
  Empty = '';
  Responsavel = '';
  filterTerm: string;
  loading: any;
  FuncionariosInitial: any;
  searchFuncionariosString = '';

  constructor(
    private service: FuncionariosService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public router: Router,
    public http: Http,
    private location: Location,
    private https: HttpClient,
    private loadingController: LoadingController,
    public toastController: ToastController
  ) {
    // this.Startapp();
  }

  public async Startapp(){
  await this.loadingPresent();
  this.service.getAll().subscribe(response => {
    this.Funcionarios = response;
  })
  this.routerHome = this.router.url;
  const datasource = this.router.url;
  console.log(datasource);
  const fn = datasource.split("/");
  const sourseresolve = fn[2];
  this.Responsavel = sourseresolve;
  this.loading.dismiss(); 
  }

  async ngOnInit() {
    await this.loadingPresent();
    this.service.getAll().subscribe(response => {
      this.Funcionarios = response;
    })
    this.routerHome = this.router.url;
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2];
    this.Responsavel = sourseresolve;
    this.loading.dismiss();
  }

    Forcereload(){
      window.location.href = window.location.href
    }

  async presentToast(messageSignal:string) {
    const toast = await this.toastController.create({
      message: messageSignal,
      duration: 2000
    });
    toast.present();
  }

  async ionViewDidEnter(){
    await this.loadingPresent();
    this.service.getAll().subscribe(response => {
      this.Funcionarios = response;
    })
    this.routerHome = this.router.url;
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2];
    this.Responsavel = sourseresolve;
    this.loading.dismiss();  
  }

  async ionViewWillEnter(){
    await this.loadingPresent();
    this.service.getAll().subscribe(response => {
      this.Funcionarios = response;
    })
    this.routerHome = this.router.url;
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2];
    this.Responsavel = sourseresolve;
    this.loading.dismiss();  
  }

  async loadingPresent() {
    this.isLoading = true;
    this.loading = await this.loadingController.create({
      message: 'Aguarde um instante...',
      spinner: 'circles',
      duration: 2000,
    });
    return this.loading.present();
  }
  Back(): void {
    this.location.back()
  }

  addFuncionario() {
    this.alertCtrl.create({
      header: 'Adicionar',
      message: 'Criar novo cadastro de "Funcionario" ?',
      buttons: [{
        text: 'Criar',
        handler: () => {
          this.modalCtrl.create({
            component: FuncionarioModalPage
          })
            .then(modal => {
              modal.present();
              return modal.onDidDismiss();
            })
            .then(({ data, role }) => {
              if (role === 'created') {
                this.Funcionarios.push(data);
              }
            });
        }
      },
      {
        text: 'Cancelar',
        handler: () => { }
      }
      ]
    })
      .then(alertEl => alertEl.present())
  }

  vew(Funcionarios: Funcionarios){
    this.alertCtrl.create({
      header: 'Visualizar',
      message: 'Visualizar Dados?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.modalCtrl.create({
            component: ViewFuncionariosModalPage,
            componentProps: { Funcionarios }
          }).then(modal => {
            modal.present();
            return modal.onDidDismiss();

          }).then(({ data, role }) => {
            this.Funcionarios = this.Funcionarios.filter(std => {
              if (data.Codigo === std.Codigo) {
                return data;
              }
              return std;
            })
          });

        }
      },
      { text: 'Não' }
      ]
    })
      .then(alertEl => alertEl.present())
 }

  Edit(funcionarioIndex: string) {
    this.alertCtrl.create({
      header: 'Editar',
      message: 'Deseja editar?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.modalCtrl.create({
            component: FichaPage,
            componentProps: { funcionarioIndex }
          }).then(modal => {
            modal.present();
            return modal.onDidDismiss();
          }).then(({ data, role }) => {
            this.Funcionarios = this.Funcionarios.filter(std => {
              if (data.Codigo === std.Codigo) {
                return data;
              }
              return std;
            })
          });

        }
      },
      { text: 'Não' }
      ]
    })
      .then(alertEl => alertEl.present())
  };
  ChangePerfilPic(Funcionarios: Funcionarios) {
    this.alertCtrl.create({
      header: 'Editar',
      message: 'Alterar Foto de Perfil?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.modalCtrl.create({
            component: FotoPage,
            componentProps: { Funcionarios }
          }).then(modal => {
            modal.present();
            return modal.onDidDismiss();
          }).then(({ data, role }) => {
            this.Funcionarios = this.Funcionarios.filter(std => {
              if (data.Codigo === std.Codigo) {
                return data;
              }
              // return std;
              this.Startapp();
            })
          });

        }
      },
      { text: 'Não' }
      ]
    })
      .then(alertEl => alertEl.present())
    console.log(Funcionarios)
  }
  Inative(ID: any, Name: string, Funcionarios: Funcionarios) {
    this.alertCtrl.create({
      header: 'Inativar',
      message: 'INATIVAR:  ' + Name + ' ?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.service.INATIVE(ID, Funcionarios)
            .subscribe(res => {
              this.presentToast(Name + ' "INATIVADO"')
              this.Funcionarios = this.Funcionarios.filter(stdout => stdout.Codigo !== ID);
            }, (err) => {
              this.presentToast(Name + ' "INATIVADO"')
              this.Funcionarios = this.Funcionarios.filter(stdout => stdout.Codigo !== ID);
            });
        }
      },
      { text: 'Não' }
      ]
    })
      .then(alertEl => alertEl.present())
  }
  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
  }

  Path(Cod:any){
    console.log(Cod)
this.alertCtrl.create({
      header: 'Editar',
      message: 'Consultar Arquivos?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.modalCtrl.create({
            component: NavegadorPage,
            componentProps: { Cod }
          }).then(modal => {
            modal.present();
            return modal.onDidDismiss();

          }).then(({ data, role }) => {
            this.Funcionarios = this.Funcionarios.filter(std => {
              if (data.Codigo === std.Codigo) {
                return data;
              }
              return std;
            })
          });

        }
      },
      { text: 'Não' }
      ]
    })
      .then(alertEl => alertEl.present())
  }
}
