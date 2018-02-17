import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule
} from '@angular/material'

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatTableModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatTableModule
    ]
})

export class MaterialModule {}