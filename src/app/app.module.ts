/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';  

/* Third Party Libraries */
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule, MatTooltipModule, MatGridListModule,
  MatSortModule, MatProgressSpinnerModule, MatDialogModule,
  MatFormFieldModule, MatInputModule, MatSelectModule,
  MatToolbarModule, MatChipsModule} from '@angular/material';
import { LazyLoadImageModule } from 'ng-lazyload-image';

/* App modules */
import { SpinnerService } from './common/spinner.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditImagesComponent } from './components/audit-images/audit-images.component';
import { LoginComponent } from './components/login/login.component';
import { UrlConfigService } from './common/urlConfig.service';
import { AuditImagesActionComponent } from './components/audit-images/audit-images-action/audit-images-action.component';
import { AppRootContainerComponent } from './components/app-root-container/app-root-container.component';
import { ImageViewerComponent } from './common/image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditImagesComponent,
    LoginComponent,
    AuditImagesActionComponent,
    AppRootContainerComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 3*1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatGridListModule,
    LazyLoadImageModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatChipsModule,
    AngularFireModule.initializeApp(environment.firebase)  
  ],
  entryComponents: [AuditImagesActionComponent], 
  providers: [SpinnerService,
  UrlConfigService, 
  HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
