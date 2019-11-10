import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EntryFormsComponent } from './entry-forms.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'forms', component: EntryFormsComponent },
            // { path: 'forms/questions', component: QuestionsComponent }
            // {
            //     path: 'products/:id',
            //     canActivate: [ProductGuardService],
            //     component: ProductDetailComponent
            // }
        ]),
        ReactiveFormsModule,
        BrowserModule
    ],
    declarations: [
        EntryFormsComponent,
        QuestionsComponent
    ],
    providers: []
})
export class EntryFormsModule { }
