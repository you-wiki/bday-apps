import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { categoryById, TOPPINGS } from '../ronni-store.data';

@Component({
  selector: 'app-ronni-store-toppings',
  imports: [NgOptimizedImage],
  templateUrl: './ronni-store-toppings.html',
})
export default class RonniStoreToppings {
  readonly category = categoryById('toppings');
  readonly toppings = TOPPINGS;
}
