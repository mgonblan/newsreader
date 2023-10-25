import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-starter-home',
  templateUrl: './starter-home.component.html',
  styleUrls: ['./starter-home.component.scss'],
})
export class StarterHomeComponent {
  @Input() noBuilderPageForUrl = false;
  @Input() isActive = true;
}
