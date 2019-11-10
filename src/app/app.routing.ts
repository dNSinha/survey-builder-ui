import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { ErrorComponent } from './error/error.component';


const appRoutes: Routes = [
    { path: '', component: LogInComponent },
    { path: 'login', component: LogInComponent },
    { path: 'signup', component: SignUpComponent },
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'commingSoon', component: CommingSoonComponent },
    { path: 'error', component: ErrorComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);