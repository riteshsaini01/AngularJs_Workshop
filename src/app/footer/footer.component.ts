// footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  menuItems = [
    { label: 'how it works', link: '#works' },
    { label: 'explore', link: '#explore' },
    { label: 'review', link: '#reviews' },
    { label: 'blog', link: '#blog' },
    { label: 'contact', link: '#contact' },
    { label: 'my account', link: '#contact' }
  ];

  // You can add any logic or properties here if needed
}
