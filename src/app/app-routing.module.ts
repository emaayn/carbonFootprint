import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CalculateComponent} from "./pages/calculate/calculate.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calculate', component: CalculateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
