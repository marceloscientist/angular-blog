import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HeroTitleComponent } from './components/hero-title/hero-title.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { SecondaryCardComponent } from './components/secondary-card/secondary-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HeroTitleComponent,
    MainCardComponent,
    SecondaryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
