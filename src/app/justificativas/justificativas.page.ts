import { TratativaPage } from './../modal/tratativa/tratativa.page';
import { ViewPage } from './../modal/view/view.page';
import { ComunicadoModalPage } from './../modal/comunicado-modal/comunicado-modal.page';
import { FeriasModalPage } from './../modal/ferias-modal/ferias-modal.page';
import { ExtraModalPage } from './../modal/extra-modal/extra-modal.page';
import { FaltaModalPage } from './../modal/falta-modal/falta-modal.page';
import { AtrasoModalPage } from './../modal/atraso-modal/atraso-modal.page';
import { FeedModalPage } from './../feed-modal/feed-modal.page';
import { Feed, FeedService } from './../service/feed.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common'



@Component({
  selector: 'app-justificativas',
  templateUrl: './justificativas.page.html',
  styleUrls: ['./justificativas.page.scss'],
})

export class JustificativasPage implements OnInit {
  isLoading = false;
  feeds: Feed[];
  feed: Feed;
  url: string = "https://www.cepelma.com.br/";
  menbros: any;
  routerHome: string;
  Empty = '';
  Responsavel = '';
  filterTerm: string;
  loading: any;
  constructor(
    private service: FeedService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public router: Router,
    public http: Http,
    private location: Location,
    private loadingController: LoadingController, 
            ) {
              this.StartApp();
            }

  async ngOnInit() {

  }

  async StartApp(){
    await this.loadingPresent();
    this.service.getAllModJ().subscribe(response => {
      this.feeds = response;
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
      duration: 5000,
    });
    return this.loading.present();
  }


  Back(): void {
    this.location.back()
  }

  removeFeed(id: string) {

    this.alertCtrl.create({
      header: 'Deletar',
      message: 'Deseja Deletar este registro?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.service.delete(id).subscribe(() => {
            this.feeds = this.feeds.filter(stdout => stdout.seq !== id);
          });
        }
      },
      { text: 'Não' }
      ]
    })
      .then(alertEl => alertEl.present())
  }


  addFeed() {

    this.alertCtrl.create({
      header: 'Adicionar',
      message: 'Adicionar qual?',
      buttons: [{
        text: 'Sem Batida',
        handler: () => {
          this.modalCtrl.create({
            component: FeedModalPage
          })
            .then(modal => {
              modal.present();
              return modal.onDidDismiss();
            })
            .then(({ data, role }) => {
              if (role === 'created') {
                this.feeds.push(data);
              }
            });
        }
      },
      {
        text: 'Atraso',
        handler: () => {
          this.modalCtrl.create({
            component: AtrasoModalPage
          })
            .then(modal => {
              modal.present();
              return modal.onDidDismiss();
            })
            .then(({ data, role }) => {
              if (role === 'created') {
                this.feeds.push(data);
              }
            });
          }
      },
      {
        text: 'Falta',
        handler: () => {

          this.modalCtrl.create({
            component: FaltaModalPage
          })
            .then(modal => {
              modal.present();
              return modal.onDidDismiss();
            })
            .then(({ data, role }) => {
              if (role === 'created') {
                this.feeds.push(data);
              }
            });
        }
      },
      {
        text: 'Hora extra',
        handler: () => {

          this.modalCtrl.create({
            component: ExtraModalPage
          })
            .then(modal => {
              modal.present();
              return modal.onDidDismiss();
            })
            .then(({ data, role }) => {
              if (role === 'created') {
                this.feeds.push(data);
              }
            });
        }
      },
      {
        text: 'Ferias',
        handler: () => {

          this.modalCtrl.create({
            component: FeriasModalPage
          })
            .then(modal => {
              modal.present();
              return modal.onDidDismiss();
            })
            .then(({ data, role }) => {
              if (role === 'created') {
                this.feeds.push(data);
              }
            });
        }
      },
      {
        text: 'Comunicado',
        handler: () => {

          this.modalCtrl.create({
            component: ComunicadoModalPage
          })
            .then(modal => {
              modal.present();
              return modal.onDidDismiss();
            })
            .then(({ data, role }) => {
              if (role === 'created') {
                this.feeds.push(data);
              }
            });
        }
      },
      ]
    })
      .then(alertEl => alertEl.present())
  }

  View(feed: Feed){
    console.log(feed)
      this.alertCtrl.create({
        header: 'Visualizar',
        message: 'Deseja visualizar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: ViewPage,
              componentProps: { feed }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();

            }).then(({data, role}) => {
              this.feeds = this.feeds.filter(std => {
                if (data.seq === std.seq) {
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



  editFeedPendent(feed: Feed) {
    console.log(feed)
    if (feed.Tipo === 'Falta_Batida') {
      this.alertCtrl.create({
        header: 'Editar',
        message: 'Deseja editar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: FeedModalPage,
              componentProps: { feed }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();

            }).then(({data, role}) => {
              this.feeds = this.feeds.filter(std => {
                if (data.seq === std.seq) {
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
    if (feed.Tipo === 'Atraso.') {
      this.alertCtrl.create({
        header: 'Editar',
        message: 'Deseja editar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: AtrasoModalPage,
              componentProps: { feed }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();

            }).then(({data, role}) => {
              this.feeds = this.feeds.filter(std => {
                if (data.seq === std.seq) {
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
    //Falta
    if (feed.Tipo === 'Falta.') {
      this.alertCtrl.create({
        header: 'Editar',
        message: 'Deseja editar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: FaltaModalPage,
              componentProps: { feed }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();

            }).then(({data, role}) => {
              this.feeds = this.feeds.filter(std => {
                if (data.seq === std.seq) {
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

    if (feed.Tipo === 'HoraExtra.') {
      this.alertCtrl.create({
        header: 'Editar',
        message: 'Deseja editar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: ExtraModalPage,
              componentProps: { feed }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();

            }).then(({data, role}) => {
              this.feeds = this.feeds.filter(std => {
                if (data.seq === std.seq) {
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

    if (feed.Tipo === 'Ferias.') {
      this.alertCtrl.create({
        header: 'Editar',
        message: 'Deseja editar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: FeriasModalPage,
              componentProps: { feed }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();

            }).then(({data, role}) => {
              this.feeds = this.feeds.filter(std => {
                if (data.seq === std.seq) {
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

    if (feed.Tipo === 'Comunicado.') {
      this.alertCtrl.create({
        header: 'Editar',
        message: 'Deseja editar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: ComunicadoModalPage,
              componentProps: { feed }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();

            }).then(({data, role}) => {
              this.feeds = this.feeds.filter(std => {
                if (data.seq === std.seq) {
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
  }

  getreturn(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2];
    console.log(sourseresolve)
      const source = this.http.get(this.url+'dados.php?Data='+sourseresolve).pipe(map(res=>res.json()));
      return source.subscribe(
         data => this.menbros = data,
         err => console.log(err)
       );
     }

     TratFeed(Mod: string, feed: Feed, Responsavel: any){
       console.log(Mod);
       console.log(feed);
       console.log(Responsavel);
      this.alertCtrl.create({
        header: 'Tratativa',
        message: 'Deseja Tratar esta Pendencia?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: TratativaPage,
              componentProps: { feed, Responsavel, Mod }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();

            }).then(({data, role}) => {
              this.feeds = this.feeds.filter(std => {
                if (data.seq === std.seq) {
                  return data;
                }
                this.StartApp();
              })
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



}
