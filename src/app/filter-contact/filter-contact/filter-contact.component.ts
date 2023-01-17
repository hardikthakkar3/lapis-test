import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-filter-contact',
  templateUrl: './filter-contact.component.html',
  styleUrls: ['./filter-contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
