import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreateContestComponent } from './create-contest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CreateContestComponent],
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule,
        FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'create-contest', component: CreateContestComponent },
    ])
]
})
export class CreateContestModule {
}
