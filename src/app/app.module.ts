import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductComponent } from './layout/product/product.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { DatePersPipe } from './shared/pipes/date-pers.pipe';
import { TestDirective } from './shared/Directives/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    NotFoundComponent,
    DatePersPipe,
    TestDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
