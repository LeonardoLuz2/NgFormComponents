import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { MainContentComponent } from './ui/main-content/main-content.component';
import { FooterComponent } from './ui/footer/footer.component';
import { FormComponent } from './form/form.component';
import { FormDebugComponent } from './shared/form/form-debug/form-debug.component';
import { InputComponent } from './shared/form/input/input.component';
import { InputErrorComponent } from './shared/form/input-error/input-error.component';
import { DatePipe } from '@angular/common';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      MainContentComponent,
      FooterComponent,
      FormComponent,
      InputComponent,
      InputErrorComponent,
      FormDebugComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      ReactiveFormsModule,
   ],
   providers: [DatePipe],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
