import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavService} from './services/nav.service';
import { MaterialModule} from './material.module';
import { HeaderComponent } from './header/header.component';
import { AddbooksComponent } from './admin/addbooks/addbooks.component';
import { RemovebooksComponent } from './admin/removebooks/removebooks.component';
import { IssuebooksComponent } from './admin/issuebooks/issuebooks.component';
import { ReturnbooksComponent } from './admin/returnbooks/returnbooks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddbooksComponent,
    RemovebooksComponent,
    IssuebooksComponent,
    ReturnbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
