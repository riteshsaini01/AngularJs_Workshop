import { Component } from '@angular/core';

@Component({
  selector: 'app-top-area',
  templateUrl: './top-area.component.html',
  styleUrls: ['./top-area.component.css']
})
export class TopAreaComponent {
  navLinks = [
    { label: 'home', link: '#home' },
    { label: 'how it works', link: '#works' },
    { label: 'explore', link: '#explore' },
    { label: 'review', link: '#reviews' },
    { label: 'blog', link: '#blog' },
    { label: 'contact', link: '#contact' }
  ];
}
