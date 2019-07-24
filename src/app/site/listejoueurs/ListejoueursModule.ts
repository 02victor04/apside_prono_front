import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { ListejoueursComponent } from './listejoueurs.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [ListejoueursComponent],
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule
    ],
    exports: [CommonModule, ListejoueursComponent]
})
export class ListejoueursModule {
}
