import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatTooltipModule
    ]
})

export class MaterialModule { }