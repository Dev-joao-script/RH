import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cpf:any;
  basepath = "login";
  // eslint-disable-next-line @typescript-eslint/naming-convention
  cpf_date: any;
  cadastrodata: any = {};
  foo: any;
  returndata: any;
  datasource: any;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    private router: Router,
  ) { 
    this.cadastrodata.mae = "";
    this.cadastrodata.data = "";
    this.cadastrodata.cpf = "";
  }
  cadastro() {
    // eslint-disable-next-line @typescript-eslint/quotes
    // eslint-disable-next-line
    if (this.cadastrodata.mae != "" && this.cadastrodata.data != "" && this.cadastrodata.cpf != "") {
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log("Mae:", this.cadastrodata.mae);
      console.log('data:', this.cadastrodata.data);
      console.log('cpf:', this.cadastrodata.cpf);
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      // eslint-disable-next-line prefer-const
      let url: string = 'http://www.cepelma.com.br/CadastroApp.php';
      console.log("Mae:", this.cadastrodata.mae),
      console.log('data:', this.cadastrodata.data),
      console.log('cpf:', this.cadastrodata.cpf),
      this.http.get(url+'?Mae='+this.cadastrodata.mae+'&Nascimento='+this.cadastrodata.data+'&CPF='+this.cadastrodata.cpf)
      .pipe(map(res => res.json()))
      .subscribe(data => {
        console.log(data);
        if (data != null && data != "Existent") {
          console.log(data);
          this.returndata = data;
          console.log(this.returndata);
          let id = this.cadastrodata.cpf;
          let key = this.cadastrodata.senha;
          this.cpf_date = this.cadastrodata.cpf;
          this.router.navigate(['senha/' + this.cadastrodata.cpf]);
          this.datasource = {
            cpfSource: this.cadastrodata.cpf,
          };
          
        } else {
          if (data == null) {
          alert("Dados não conferem!");
          }else{
          if (data == "Existent") {
          alert("Usuario ja cadastrado");
          }
          }
        }
      });
    } else {
      console.log("preencha todos os campos");
      alert("preencha todos os campos");
    }
    
  }

  ngOnInit() {
  }

}
