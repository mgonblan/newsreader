import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() title = 'newsreader';
  @Input() hasHamburger = false;
  @Input() active = false;
  @Input() placeholder = 'Search';
  @Input() autocomplete = false;
  @Input() disabled = false;
  
  @HostBinding('class.bx--header') headerClass = true;
}
