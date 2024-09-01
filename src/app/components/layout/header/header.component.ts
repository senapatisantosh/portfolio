import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from '../../../services/language/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  providers: [LanguageService],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('animateMenu', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(-50%)' }),
          stagger(50, [
            animate(
              '250ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  responsiveMenuVisible: Boolean = false;
  pageYPosition: number = 0;
  languageFormControl: FormControl = new FormControl();
  cvName: string = '';

  constructor(
    private router: Router,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageFormControl.valueChanges.subscribe((val) =>
      this.languageService.changeLanguage(val)
    );

    this.languageFormControl.setValue(this.languageService.language);
  }

  scroll(el: string) {
    const element = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router
        .navigate(['/home'])
        .then(() => element!.scrollIntoView({ behavior: 'smooth' }));
    }
    this.responsiveMenuVisible = false;
  }

  downloadCV() {
    this.languageService.translateService
      .get('Header.cvName')
      .subscribe((val) => {
        this.cvName = val;
        console.log(val);
        // app url
        let url = window.location.href;

        // Open a new window with the CV
        window.open(url + '/../assets/cv/' + this.cvName, '_blank');
      });
  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event: Event) {
    this.pageYPosition = window.pageYOffset;
  }

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language);
  }
}
