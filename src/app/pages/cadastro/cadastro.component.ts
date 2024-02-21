import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/pageConfigs/header/header.component";
import { BodyComponent } from "../../components/pageConfigs/body/body.component";

@Component({
    selector: 'app-cadastro',
    standalone: true,
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.scss',
    imports: [HeaderComponent, BodyComponent]
})
export class CadastroComponent {

}
