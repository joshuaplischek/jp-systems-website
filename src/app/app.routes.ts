import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './main/imprint/imprint.component';
import { PrivacyPolicyComponent } from './main/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'imprint', component: ImprintComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},

];
