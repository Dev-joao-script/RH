import { FeedPage } from './../feed/feed.page';
import { UserService } from './../service/user.service';
import { OnInit, OnDestroy } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit, OnDestroy{
  Userloged: string
  cpf:any;
  basepath = "login";
  // eslint-disable-next-line @typescript-eslint/naming-convention
  cpf_date: any;
  logindata: any = {};
  foo: any;
  returndata: any;
  datasource: any;
  constructor(
    public navCtrl: NavController,
    public http: Http,
    private router: Router,
    public UserService: UserService,
    public toastController: ToastController

            ) {
    this.logindata.cpf = "";
    this.logindata.senha = "";
  }

  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  ionViewDidLeave(): void{
    this.cpf =  this.logindata.cpf;
    console.log(this.cpf);
  }

  async presentToast(messageSignal:string) {
    const toast = await this.toastController.create({
      message: messageSignal,
      duration: 2000
    });
    toast.present();
  }

  login() {
    // eslint-disable-next-line @typescript-eslint/quotes
    // eslint-disable-next-line
    if (this.logindata.cpf != "" && this.logindata.senha != "") {
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log("user:", this.logindata.cpf);
      console.log('pass:', this.logindata.senha);
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      // eslint-disable-next-line prefer-const
      let url: string = 'http://www.cepelma.com.br/loginAPP.php';
      console.log("user:", this.logindata.cpf),
      console.log('pass:', this.logindata.senha),
      this.http.get(url+'?user='+this.logindata.cpf+'&Data='+this.logindata.senha)
      .pipe(map(res => res.json()))
      .subscribe(data => {
        console.log(data);
        if (data != null) {
          console.log(data);
          this.returndata = data;
          console.log(this.returndata);
          let id = this.logindata.cpf;
          let key = this.logindata.senha;
          this.cpf_date = this.logindata.cpf;
          FeedPage.User = data[0].mem_name;
          this.router.navigate(['feed/' + data[0].mem_name]);

          this.datasource = {
          cpfSource: this.logindata.cpf,
          };
          
        } else {
          this.presentToast("Login e Senha incorretos!");
        }
      });
    } else {
      this.presentToast("preencha todos os campos");
    }
    
  }


  Cadastro(){
    this.router.navigate(['cadastro']);
  }

  forgot(){
    this.router.navigate(['forgot']);
  }


};


