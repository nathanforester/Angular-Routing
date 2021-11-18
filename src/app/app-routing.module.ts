import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';



@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ExampleAComponent, ExampleBComponent ]
