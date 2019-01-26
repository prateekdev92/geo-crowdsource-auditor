import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/* Third Party Libraries */
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { MomentModule } from 'ngx-moment';
import { MatTableModule, MatTooltipModule, MatGridListModule, MatSortModule, MatProgressSpinnerModule} from '@angular/material';
import { LazyLoadImageModule } from 'ng-lazyload-image';

/* App modules */
import { SpinnerService } from './common/spinner.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditImagesComponent } from './components/audit-images/audit-images.component';
import { LoginComponent } from './components/login/login.component';
import { UrlConfigService } from './common/urlConfig.service';

@NgModule({
  declarations: [
    AppComponent,
    AuditImagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ToastrModule,
    MomentModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatGridListModule,
    LazyLoadImageModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [SpinnerService,
  UrlConfigService, 
  HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
