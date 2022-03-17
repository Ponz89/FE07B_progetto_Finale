import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <ngb-pagination [collectionSize]="600" [(page)]="page" [maxSize]="5" [rotate]="true" [boundaryLinks]="true"></ngb-pagination>
  `,
  styles: [
  ]
})
export class PaginationComponent implements OnInit {
  page = 1;
  constructor() { }

  ngOnInit(): void {
  }

}

