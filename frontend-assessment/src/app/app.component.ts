import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-assessment';

  constructor(private router: Router) {

  }

  goToCustomers() {
    this.router.navigate(['/customers'])
  }
}
