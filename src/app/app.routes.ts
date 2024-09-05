import { Routes } from '@angular/router';
import { RegistroComponent } from "./registro/registro.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LegalComponent } from './legal/legal.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { CardComponent } from './card/card.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ProfileServicesComponent } from './profile-services/profile-services.component';
import { MensajeriaComponent } from './mensajeria/mensajeria.component';
import { UpdateAccountComponent } from './update-account/update-account.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'navbar', component: NavBarComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'legal', component: LegalComponent },
    { path: 'professionals', component: ProfessionalsComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'account', component: AccountComponent },
    { path: 'card', component: CardComponent },
    { path: 'forgotPass', component: ForgotPassComponent },
    { path: 'profileServicesCard', component: ProfileServicesComponent },
    { path: 'mensajeria', component: MensajeriaComponent},
    { path: 'updateAccount', component: UpdateAccountComponent},
    // siempre ultimo
    { path: '**', component: PageNotFoundComponent },
];
