import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { HomeModule } from './site/home/home.module';
import { PronosticsModule } from './site/pronostics/pronostics.module';
import { ResultatsModule } from './site/resultats/resultats.module';
import { AdminModule } from './site/admin/admin.module';
import { ErrorsModule } from './site/errors/errors.module';
import { SharedModule } from './site/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './site/material/material.module';
import { LoginModule } from './site/login/login.module';

import { CustomMaterialModule } from './site/custom-material/custom-material.module';
import { ConfirmDialogComponent } from './site/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

import { LOCALE_ID } from '@angular/core';
import fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

import { JoueurService } from './services/joueurs/joueur.service';
import { ListejoueursModule } from './site/listejoueurs/ListejoueursModule';
import { CreateUserModule } from './site/create-user/create-user.module';

registerLocaleData(fr);
@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
    
   
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    LoginModule,
    SharedModule,
    MatDialogModule,
    HomeModule,
    PronosticsModule,
    ListejoueursModule,
    CreateUserModule,
    ResultatsModule,
    AdminModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ErrorsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "fr-CA"},
    JoueurService
],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
