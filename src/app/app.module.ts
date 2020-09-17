import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OrbitListComponent } from "./orbit-list/orbit-list.component";
import { OrbitCountsComponent } from "./orbit-counts/orbit-counts.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, OrbitListComponent, OrbitCountsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
