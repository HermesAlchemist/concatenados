import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/pageConfigs/header/header.component';

@Component({
  selector: 'app-pix-transfer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './pix-transfer.component.html',
  styleUrl: './pix-transfer.component.scss'
})
export class PixTransferComponent {
saudacao: any;
saldo: string | number | undefined;
logout() {
throw new Error('Method not implemented.');
}
toggleDropdown() {
throw new Error('Method not implemented.');
}
  pixTransferForm!: FormGroup;
showDropdown: any;

  constructor(private fb: FormBuilder) {
;
  }

  ngOnInit() {
    this.pixTransferForm = new FormGroup({
      "chavePix": new FormControl(null, 
        [
        Validators.required],
        ), // poderia ser email, telefone, CPF/CNPJ, etc.
        "valor": new FormControl(null, 
        [
        Validators.required],
        ),
        "descricao": new FormControl(null, 
        [
        Validators.required],
        )
 })
  }
  realizarTransferencia() {
    if (this.pixTransferForm.valid) {
      // Aqui você pode processar a transferência
      console.log(this.pixTransferForm.value);
      // Simule a transferência ou chame um serviço que faça isso
    }
  }
}