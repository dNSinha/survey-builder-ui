import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index/index.component';
import { DetailedIndexComponent } from './detailed-index/detailed-index.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'index', component: IndexComponent },
            { path: 'deatiledIndex', component: DetailedIndexComponent }
            // {
            //     path: 'products/:id',
            //     canActivate: [ProductGuardService],
            //     component: ProductDetailComponent
            // }
        ]),
        ReactiveFormsModule,
        BrowserModule
    ],
    declarations: [IndexComponent, DetailedIndexComponent],
    providers: []
})
export class DashboardModule { }
