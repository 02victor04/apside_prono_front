import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ContestComponent } from './contest.component';

@NgModule({
    declarations: [ContestComponent],
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule
    ],
    exports: [CommonModule, ContestComponent]
})
export class ContestModule {
}