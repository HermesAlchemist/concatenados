import { Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { authGuard } from './services/auth/auth.guard';
import { HeaderComponent } from './components/pageConfigs/header/header.component';


export const routes: Routes = [
    {
        path: "",
        component: DefaultComponent,
        canActivate: [authGuard],
        children: [
            // home page
            {
                path: "",
                component: DefaultComponent,
                data: {
                breadcrumb: {
                    label: "",
                },
                },
            },
        ],

        // login page
        // {
        //     path: "login",
        //     component: HeaderComponent,
        //     data: {
        //     breadcrumb: {
        //         label: "Login",
        //     },
        //     },
        // },
    }
];
