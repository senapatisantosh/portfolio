import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [NgbNavModule, TranslateModule, NgFor],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
})
export class JobComponent {
  active = 0;
}
