import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { categoryById, dishById } from '../ronni-store.data';

@Component({
  selector: 'app-ronni-store-dish',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './ronni-store-dish.html',
})
export default class RonniStoreDish {
  private readonly route = inject(ActivatedRoute);

  readonly dish = dishById(this.route.snapshot.data['dishId'] as string);
  readonly category = categoryById(this.dish.category);
  readonly dishTransitionName = `dish-${this.dish.id}`;
}
