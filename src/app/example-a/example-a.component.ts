import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-a',
  template: `
      <h2>Tracker</h2>
      <h4>Hello<h4>
      <a routerLink="/">Start Again</a>
  `,
  styles: [
  ]
})
export class ExampleAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
