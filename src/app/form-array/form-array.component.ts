import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });
    this.add();
  }

  get items() {
    return this.form.get('items') as FormArray;
  }

  ngOnInit(): void {}

  add() {
    const group = this.fb.group({
      key: '',
      value: '',
    });
    this.items.push(group);
  }

  remove(index: number) {
    this.items.removeAt(index);
  }

  submit() {
    console.log(this.form.value);
  }
}
