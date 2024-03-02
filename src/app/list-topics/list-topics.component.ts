// list-topics.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-topics',
  templateUrl: './list-topics.component.html',
  styleUrls: ['./list-topics.component.css']
})
export class ListTopicsComponent {
  topics = [
    { icon: 'flaticon-restaurant', title: 'restaurant', listings: 150 },
    { icon: 'flaticon-travel', title: 'destination', listings: 214 },
    { icon: 'flaticon-building', title: 'hotels', listings: 185 },
    { icon: 'flaticon-pills', title: 'healthcare', listings: 200 },
    { icon: 'flaticon-transport', title: 'automotion', listings: 120 }
  ];

  // You can add any logic or properties here if needed
}
