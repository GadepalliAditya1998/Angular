import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MentionModule } from "angular-mentions";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MentionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
