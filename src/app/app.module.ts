import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app.routes';
// El import de PagesModule
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
