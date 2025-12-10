import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductComponent } from './layout/product/product.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePersPipe } from './shared/pipes/date-pers.pipe';
import { TestDirective } from './shared/Directives/test.directive';
import { TelephoneComponent } from './layout/telephone/telephone.component';
import { TvComponent } from './layout/tv/tv.component';
import { CardProductComponent } from './layout/card-product/card-product.component';
import { ChangeBackgroundDirective } from './shared/Directives/change-background.directive';
import { ReactiveFormComponent } from './layout/reactive-form/reactive-form.component';
import { DrivenFormComponent } from './layout/driven-form/driven-form.component';
import { AddProductComponent } from './layout/add-product/add-product.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { DetailsProductComponent } from './layout/details-product/details-product.component';
import { authInterceptor } from './core/interceptor/auth.guard';

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
    TelephoneComponent,
    TvComponent,
    CardProductComponent,
    ChangeBackgroundDirective,
    ReactiveFormComponent,
    DrivenFormComponent,
    AddProductComponent,
    DetailsProductComponent, // ✅ ta directive doit être ici

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [  provideHttpClient(
    withInterceptors([authInterceptor])
  )],
  bootstrap: [AppComponent]
})
export class AppModule { }
