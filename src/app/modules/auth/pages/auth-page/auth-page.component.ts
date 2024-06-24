import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/movies']);
  }

  ngOnInit(): void {
  }

}
