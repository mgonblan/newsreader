import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterHomeComponent } from "./starter-home/starter-home.component";

const routes: Routes = [
  {
  	path: '',
	  component: StarterHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterHomeRoutingModule { }
