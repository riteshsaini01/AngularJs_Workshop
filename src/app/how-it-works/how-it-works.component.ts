// how-it-works.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent {
  works = [
    {
      icon: 'flaticon-lightbulb-idea',
      title: 'choose what to do',
      description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.'
    },
    {
      icon: 'flaticon-networking',
      title: 'find what you want',
      description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.'
    },
    {
      icon: 'flaticon-location-on-road',
      title: 'explore amazing place',
      description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.'
    }
  ];

  // You can add any logic or properties here if needed
}
