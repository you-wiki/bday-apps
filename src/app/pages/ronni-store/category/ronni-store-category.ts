import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  categoryById,
  DISHES,
  MenuCategoryId,
} from '../ronni-store.data';

@Component({
  selector: 'app-ronni-store-category',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './ronni-store-category.html',
})
export default class RonniStoreCategory {
  private readonly route = inject(ActivatedRoute);
  private readonly categoryId = this.route.snapshot.data['categoryId'] as MenuCategoryId;

  readonly category = categoryById(this.categoryId);
  readonly dishes = DISHES.filter(({ category }) => category === this.categoryId);

  dishViewTransitionName(dishId: string): string {
    return `dish-${dishId}`;
  }
}
