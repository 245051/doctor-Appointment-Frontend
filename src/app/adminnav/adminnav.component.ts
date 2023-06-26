import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent {

  constructor(private router: Router) { }
  doctor(){
    this.router.navigate(['/adminfunction']);
  }
  appointment(){
    this.router.navigate(['/appointment'])
  }
}
