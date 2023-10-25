import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, GridModule, IconModule, IconService, SearchModule, UIShellModule, } from 'carbon-components-angular';
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import Search20 from '@carbon/icons/es/search/20';
import {BuilderModule} from '@builder.io/angular';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { environment } from "../environments/environment";
import { CategoriesSliderComponent } from './categories-slider/categories-slider.component';


@NgModule({
  declarations: [AppComponent, NoticiasComponent, ProductosComponent, CategoriesSliderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
    UIShellModule,
    GridModule,
    SearchModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconService: IconService) {
    this.iconService.registerAll([Notification20, UserAvatar20, Search20]);
  }
}
