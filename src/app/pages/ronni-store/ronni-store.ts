import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { CATEGORIES } from './ronni-store.data';

@Component({
  selector: 'app-ronni-store',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './ronni-store.html',
})
export default class RonniStore {
  readonly categories = CATEGORIES;
}
