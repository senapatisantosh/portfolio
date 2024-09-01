import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language: 'en' = 'en';

  constructor(
    public translateService: TranslateService,
    private location: Location
  ) {}

  initLanguage() {
    this.translateService.addLangs(['en', 'es']);
    let language = navigator.language || (navigator as any).userLanguage;
    language = 'en';
    this.translateService.setDefaultLang(language);

    this.location.go(language);

    this.language = language;
  }

  changeLanguage(language: 'en') {
    this.translateService.setDefaultLang(language);
    this.location.go(language);
    this.language = language;
  }
}
