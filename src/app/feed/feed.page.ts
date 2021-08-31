import { AdvertenciaPage } from './../modal/advertencia/advertencia.page';
import { TurnoPage } from './../modal/turno/turno.page';
import { ViewPage } from './../modal/view/view.page';
import { ComunicadoModalPage } from './../modal/comunicado-modal/comunicado-modal.page';
import { FeriasModalPage } from './../modal/ferias-modal/ferias-modal.page';
import { ExtraModalPage } from './../modal/extra-modal/extra-modal.page';
import { FaltaModalPage } from './../modal/falta-modal/falta-modal.page';
import { AtrasoModalPage } from './../modal/atraso-modal/atraso-modal.page';
import { FeedModalPage } from './../feed-modal/feed-modal.page';
import { Feed, FeedService } from './../service/feed.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  feeds: Feed[];
  feed: Feed;
  url: string = "https://www.cepelma.com.br/";
  menbros: any;
  routerHome: string;
  sourseresolveone: string;
  Roting: string;
  filterTerm: string;
  static User:string;
  isLoading = false;
  loading: any;

  constructor(
    private service: FeedService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public router: Router,
    public http: Http,
    private zone: NgZone,
    private loadingController: LoadingController,
    ) { }

  async ngOnInit() {
    await this.loadingPresent();
    this.service.getAll().subscribe(response => {
      this.feeds = response;
    })
    this.routerHome = this.router.url;
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    this.sourseresolveone = fn[2];
    console.log(this.sourseresolveone)
    this.loading.dismiss();

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
      buttons: [
        {
          text: 'Advertencia verbal',
          handler: () => {
  
            this.modalCtrl.create({
              component: AdvertenciaPage
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
        text: 'Troca de turno',
        handler: () => {

          this.modalCtrl.create({
            component: TurnoPage
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

     
     async loadingPresent() {
      this.isLoading = true;
      this.loading = await this.loadingController.create({
        message: 'Aguarde um instante...',
        spinner: 'circles',
      });
      return this.loading.present();
    }
  
    async loadingDismiss() {
      this.isLoading = false;
      return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
    }


}
