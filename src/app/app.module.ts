import { Box } from "./box/box.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AppComponent, Box, InputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
