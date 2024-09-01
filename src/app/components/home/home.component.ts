import { Component, importProvidersFrom } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { JobComponent } from './job/job.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    BannerComponent,
    ContactComponent,
    JobComponent,
    ProjectsComponent,
    CommonModule,
    CarouselModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
