import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { DetailjoueurComponent } from './detailjoueur.component';

@NgModule({
    declarations: [DetailjoueurComponent],
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule
    ],
    exports: [CommonModule, DetailjoueurComponent]
})
export class DetailjoueurModule {
}
