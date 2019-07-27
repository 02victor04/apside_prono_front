import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EventComponent } from './event.component';

@NgModule({
    declarations: [EventComponent],
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule
    ],
    exports: [CommonModule, EventComponent]
})
export class EventModule {
}