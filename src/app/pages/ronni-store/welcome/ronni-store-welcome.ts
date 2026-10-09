import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ronni-store',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './ronni-store-welcome.html',
})
export default class RonniStoreWelcome {}
