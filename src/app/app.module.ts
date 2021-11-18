import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';

const routes: Routes = [
 // {path: '', component: AppComponent},
  {path: 'exampleA', component: ExampleAComponent},
  {path: 'exampleB', component: ExampleBComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) //{ enableTracing:True} debugs routes
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
