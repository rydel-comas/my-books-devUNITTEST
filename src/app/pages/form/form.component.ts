import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.instanceForm();
  }

  public onSave(): void {
    console.log('Saved');
  }

  private instanceForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(5)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,4}$')]],
    });
  }

}
