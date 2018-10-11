import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { routes } from "./app.router";

import { AppComponent } from "./app.component";
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, routes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
