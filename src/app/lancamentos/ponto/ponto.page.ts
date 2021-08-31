import { NavController, Platform, ToastController, ModalController } from '@ionic/angular';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common'
import { Funcionarios, FuncionariosService } from 'src/app/service/funcionarios.service';



@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.page.html',
  styleUrls: ['./ponto.page.scss'],
})
export class PontoPage implements OnInit {
  uploadForm: FormGroup;
  pdfObj = null;
  justtext: any;
  sourseresolve: any;
  url = 'http://www.cepelma.com.br/Api_Ponto.php';
  SERVER_URL = "https://www.cepelma.com.br/Api_Ponto.php";
  basepath = "http://localhost";
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];
  Posts: any;
  pages: any;
  ip: string;
  funcionarios: Funcionarios[];
  selected: any;
  valueB: string;
  valueA: string;
  Name: any;
  Periodo: string;
  Tipo: string;

  constructor(
    private location: Location,
    public router: Router,
    private formBuilder: FormBuilder,
    private https: HttpClient,
    public http: Http,
    public navCtrl: NavController,
    public platform: Platform,
    private FuncionariosService: FuncionariosService,
    private modalCtrl: ModalController,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.valueA = ""
    this.valueB = ""
    this.Periodo = ""
    this.Tipo = ""
    this.FuncionariosService.getAll().subscribe(response => {
      this.funcionarios = response;
    })

    this.uploadForm = this.formBuilder.group({
      File: ['']
    });
  }

  file = new FormControl('');
  file_data: any = '';
  fileChange(event) {

    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    if (fileList.length > 0) {

      const file = fileList[0];
      //get file information such as name, size and type
      console.log('finfo', file.name, file.size, file.type);
      //max file size is 4 mb
      if ((file.size / 1048576) <= 4) {
        let formData = new FormData();
        let info = { id: 2, name: 'raja' }
        formData.append('file', file, file.name);
        formData.append('id', '2');
        formData.append('tz', new Date().toISOString())
        formData.append('update', '2')
        formData.append('info', JSON.stringify(info))
        this.file_data = formData

      } else {
        //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
      }
    }
  }

  uploadFile() {
    this.ip = this.url + "?id=" + this.valueA + "&Nome=" + this.valueB + "&Periodo=" + this.Periodo;
    if (this.valueA === "" || this.valueB === "" || this.Periodo === "" || this.file_data === "") {
      this.presentToast("Preencha todos os campos!");
      console.log(this.Tipo);
    } else {
      // this.createPdf();
      this.https.post(this.ip, this.file_data)
      .subscribe(() => {
        this.modalCtrl.dismiss(null, 'closed');
        this.presentToast("Lançamento Concluido");
      }, () => {
        this.modalCtrl.dismiss(null, 'closed');
        this.presentToast("Lançamento Concluido");
    });
    }
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

  async presentToast(messageSignal: string) {
    const toast = await this.toastController.create({
      message: messageSignal,
      duration: 3000
    });
    toast.present();
  }
  closeModal() {
    this.modalCtrl.dismiss(null, 'closed');
  }

}

