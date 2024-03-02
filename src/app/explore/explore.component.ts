// explore.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
  exploreItems = [
    {
      image: 'assets/images/explore/e1.jpg',
      category: 'resturent',
      title: 'tommy helfinger bar',
      rating: 5.0,
      ratingsCount: 10,
      priceRange: '5$-300$',
      type: 'resturent',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....',
      isOpenNow: false
    },
    // Repeat the above structure for other explore items
  ];

  // You can add any logic or properties here if needed
}
