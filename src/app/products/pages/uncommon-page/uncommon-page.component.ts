import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Armando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient(): void{
    this.name = 'Elisa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Elias','Armando','Alfredo','Leticia','Magali','Verenice'];
  public clientsMap = {
    '=0':    'no tenemos clientes en espera.',
    '=1':    'tenemos un cliente esperando.',
    '=2':    'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  public deleteClient():void{
    this.clients.shift();
  }

  //KeyValuePipe

  public person = {
    name: 'Armando',
    age: 35,
    address: 'Xalapa, Mexico'
  }




}
