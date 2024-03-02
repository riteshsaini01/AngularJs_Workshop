import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  languages = [
    { value: 'default', label: 'EN' },
    { value: 'Bangla', label: 'BN' },
    { value: 'Arabic', label: 'AB' }
  ];

  currencies = [
    { value: 'usd', label: 'USD' },
    { value: 'euro', label: 'Euro' },
    { value: 'bdt', label: 'BDT' }
  ];
}

