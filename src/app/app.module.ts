import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AuthModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    ProductModule

  ],
  providers: [],
  exports: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
