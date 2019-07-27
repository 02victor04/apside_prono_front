import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreateEventComponent } from './create-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CreateEventComponent],
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule,
        FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'create-event', component: CreateEventComponent },
    ])
]
})
export class CreateEventModule {
}
