import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-contact',
  templateUrl: './filter-contact.component.html',
  styleUrls: ['./filter-contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterContactComponent implements OnInit {

  filterContactForm: FormGroup;

  @Output() queryChange = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.filterContactForm = this.formBuilder.group({
      query: '',
    })
  }

  ngOnInit(): void {
    this.filterContactForm.controls.query.valueChanges.subscribe((query) => {
      this.queryChange.emit(query);
    })
  }

}
