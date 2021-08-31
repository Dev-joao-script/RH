import { LoginPage } from './login/login.page';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common'
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { QueryList, ViewChildren } from '@angular/core';
import { UserLoguedService } from 'src/app/user-logued.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit{
@ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
public apppages = [
  {
    title:'Tabs',
    url: '/tabs',
    icon: 'list'
  }
]

  url: string = "https://www.cepelma.com.br/";
  menbros: any;
  nextnavigation: any;
  routerHome: string;
  sourseresolveone: string;
  User: string;

  constructor(public router: Router,
              public http: Http,
              public activatedroute: ActivatedRoute,
              public https: HttpClient,
              private location: Location,
              private Params: LoginPage,
              private platform: Platform,
              ){
  this.getreturn();
  this.getRouteres();
  this.backButtonEvent();
  }
  ngOnInit(): void {
    this.routerHome = this.router.url;
    console.log(this.routerHome)
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
   getRouteres(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2];
    this.nextnavigation = sourseresolve;
   }

   reserv(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2]; 
    const source = this.http.get(this.url+'dados.php?Data='+sourseresolve).pipe(map(res=>res.json()));
    return source.subscribe(
       data => this.menbros = data,
       err => console.log(err)
     );
   }

   goin(){
     this.router.navigate(['regulamento-interno'])
   }

   file = new FormControl('');
   file_data:any = '';
   fileChange(index,event) {
     
     const fileList: FileList = event.target.files;
     //check whether file is selected or not
     if (fileList.length > 0) {
 
         const file = fileList[0];
         //get file information such as name, size and type
         console.log('finfo',file.name,file.size,file.type);
         //max file size is 4 mb
         if((file.size/1048576)<=4)
         {
           let formData = new FormData();
           let info={id:2,name:'raja'}
           formData.append('file', file, file.name);
           formData.append('id','2');
           formData.append('tz',new Date().toISOString())
           formData.append('update','2')
           formData.append('info',JSON.stringify(info))
           this.file_data=formData
           
         }else{
           //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
         }
         
     }
 
   }
 
   ip="http://127.0.0.1/async/"
   
   uploadFile()
     {
       this.https.post(this.ip+'upload-file.php',this.file_data)
       .subscribe(res => {
       //send success response
       }, (err) => {
       //send error response
     });
     }
   
     goeHome(){
     const letgoe = this.Params.cpf;
     this.router.navigate(['home/'+letgoe])
     }

     backButtonEvent() {
      this.platform.backButton.subscribe(async () => {
          this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
              if (outlet && outlet.canGoBack()) {
                  outlet.pop();
              } else  {
                   navigator['app'].exitApp();
              }
          });
      });
  }
  GoenOne(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    let Url = fn[2];
    Url = decodeURI(Url);
    Url = decodeURIComponent(Url);
    this.router.navigate(['justificativas/' + Url]);
  }

  GoenTratamentos(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    let Url = fn[2];
    Url = decodeURI(Url);
    Url = decodeURIComponent(Url);
    this.router.navigate(['concluidos/' + Url]);
  }

  GoenFuncionarios(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    let Url = fn[2];
    Url = decodeURI(Url);
    Url = decodeURIComponent(Url);
    this.router.navigate(['funcionarios/' + Url]);
  }

  GoenNav(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    let Url = fn[2];
    Url = decodeURI(Url);
    Url = decodeURIComponent(Url);
    this.router.navigate(['navegador']);
  }

  

  GoenSeguranca(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    let Url = fn[2];
    Url = decodeURI(Url);
    Url = decodeURIComponent(Url);
    this.router.navigate(['seguranca/' + Url]);
  }
}
