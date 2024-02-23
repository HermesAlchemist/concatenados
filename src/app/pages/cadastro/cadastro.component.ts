import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faAddressCard, faLock, faCalendarDays, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from "../../components/pageConfigs/header/header.component";
import { BodyComponent } from "../../components/pageConfigs/body/body.component";

@Component({
    selector: 'app-cadastro',
    standalone: true,
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.scss',
    imports: [HeaderComponent, BodyComponent, FontAwesomeModule]
})
export class CadastroComponent {
    user = faUser;
    adressCard = faAddressCard;
    envelope = faEnvelope;
    phone = faPhone;
    calendar = faCalendarDays;
    lock = faLock;
}
