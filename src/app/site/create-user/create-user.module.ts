import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreateUserComponent } from './create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CreateUserComponent],
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule,
        FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'create-user', component: CreateUserComponent },
    ])
]
})
export class CreateUserModule {
}
