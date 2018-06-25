import { Component, OnInit, NgModule } from '@angular/core';
import { CompanyComponent } from './company.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './company.service';

@NgModule({
    declarations: [CompanyComponent],
    imports: [CommonModule,FormsModule,HttpClientModule],
    exports: [CompanyComponent],
    providers: [CompanyService]
})

export class CompanyModule {}