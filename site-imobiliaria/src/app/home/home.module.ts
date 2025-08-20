import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BannerHome } from '../banner-home/banner-home';
import { routes } from './home.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), HomeComponent, BannerHome],
})
export class HomeModule {}
