import { NavegateService, cont_cheques, car_ponto, ferias, atestados } from './../../service/navegate.service';
import { Funcionarios } from './../../service/funcionarios.service';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Location } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { FuncionariosService } from 'src/app/service/funcionarios.service';


@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.page.html',
  styleUrls: ['./navegador.page.scss'],
})
export class NavegadorPage implements OnInit {
  @Input() Cod: any;

  isLoading = false;
  Funcionarios: Funcionarios[];
  cont_cheques: cont_cheques[];
  ferias: ferias[]; 
  car_ponto: car_ponto[];
  atestados: atestados[];
  url: string = "https://www.cepelma.com.br/";
  menbros: any;
  routerHome: string;
  Empty = '';
  Responsavel = '';
  filterTerm: string;
  filterDoc: string;
  loading: any;
  FuncionariosInitial: any;
  searchFuncionariosString = '';
  image = './assets/PDF.png';
  index: string;

  constructor(
    private service: FuncionariosService,
    private serviceCC: NavegateService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public router: Router,
    public http: Http,
    private location: Location,
    private https: HttpClient,
    private loadingController: LoadingController,
    public toastController: ToastController,
  ) {}


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
    this.service.get(this.Cod).subscribe(response => {
      console.log(this.Cod)
      this.Funcionarios = response;
    })
    this.serviceCC.get(this.Cod).subscribe(response => {
      this.cont_cheques = response;
      console.log(this.cont_cheques)
    })
    this.serviceCC.getduo(this.Cod).subscribe(response => {
      this.car_ponto = response;
      console.log(this.car_ponto)
    })
    this.serviceCC.getfer(this.Cod).subscribe(response => {
      this.ferias = response;
      console.log(this.ferias)
    })
    this.serviceCC.getate(this.Cod).subscribe(response => {
      this.atestados = response;
      console.log(this.atestados)
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
  this.modalCtrl.dismiss(null, 'closed');
  }

  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
  }

  isNumber(val) { this.index = val; }

}
