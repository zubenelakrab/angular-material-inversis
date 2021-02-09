import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AutocompleteComponent } from "./components/autocomplete/autocomplete.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, AutocompleteComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
