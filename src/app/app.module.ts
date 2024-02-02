import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './index/home/home.component';
import { SecondPageComponent } from './index/second-page/second-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HamburguerComponent } from './components/hamburguer/hamburguer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondPageComponent,
    FooterComponent,
    HeaderComponent,
    HamburguerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
