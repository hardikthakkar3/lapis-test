import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-contact',
  templateUrl: './filter-contact.component.html',
  styleUrls: ['./filter-contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterContactComponent implements OnInit {

  filterContactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterContactForm = this.formBuilder.group({
      query: '',
    })
  }

  ngOnInit(): void {
  }

}
