import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterHomeRoutingModule } from './starter-home-routing.module';
import { StarterHomeComponent } from './starter-home/starter-home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BuilderModule } from "@builder.io/angular";
import { environment } from "../../environments/environment.ts";
import { LoadingModule } from 'carbon-components-angular';
@NgModule({
  declarations: [StarterHomeComponent, NotfoundComponent],
  imports: [
    CommonModule,
    StarterHomeRoutingModule,
    BuilderModule.forRoot(environment.buildertoken),
    LoadingModule,
  ],
})
export class StarterHomeModule {}
