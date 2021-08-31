import { ComunicadoModalPage } from './modal/comunicado-modal/comunicado-modal.page';
import { FaltaModalPage } from './modal/falta-modal/falta-modal.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPage } from './login/login.page';
import { AtrasoModalPage } from './modal/atraso-modal/atraso-modal.page';
import { ViewPage } from './modal/view/view.page';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    AtrasoModalPage,
    ComunicadoModalPage,
    ViewPage,
  ],
  entryComponents: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FileUploadModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
        
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PreviewAnyFile,
    LoginPage,
    AppComponent,
    AtrasoModalPage,
    FaltaModalPage,
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {
}
