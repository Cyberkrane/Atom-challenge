import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './index/home/home.component';
import { SecondPageComponent } from './index/second-page/second-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HamburguerComponent } from './components/hamburguer/hamburguer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipePipe } from './pipes/truncate-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondPageComponent,
    FooterComponent,
    HeaderComponent,
    HamburguerComponent,
    TruncatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
