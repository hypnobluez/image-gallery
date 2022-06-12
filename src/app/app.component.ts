import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  galleryImages = [];

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    document
      .querySelectorAll('h1')
      .forEach((i) => i.classList.toggle('dark-theme'));
  }

  constructor() {
    for (let i = 0; i < 5; i++) {
      const url = 'https://picsum.photos/500/500?random=1' + (i + 1);
      this.galleryImages[i] = {
        id: i + 1,
        url: url,
        show: false,
        index: i,
      };
    }
  }
}
