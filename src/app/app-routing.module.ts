import { HomeComponent } from './home/home.component';
import { TakeComponent } from './take/take.component';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"", component:HomeComponent},
{path: "createquiz", component: CreateComponent},
{path: "takequiz", component: TakeComponent}  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
