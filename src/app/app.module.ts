import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconModule, IconService, UIShellModule, } from 'carbon-components-angular';
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import Search20 from '@carbon/icons/es/search/20';
import {BuilderModule} from '@builder.io/angular';
import { environment } from 'src/environments/environment.development';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
    UIShellModule,
    BuilderModule.forRoot(environment.buildertoken)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconService: IconService) {
    this.iconService.registerAll([Notification20, UserAvatar20, Search20]);
  }
 }
