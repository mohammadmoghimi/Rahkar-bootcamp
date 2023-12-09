import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';  
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
   
@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule ],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent  {
  numberForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.numberForm = this.fb.group({
      numbers: this.fb.array([this.createNumberInput()])
    });
  }

  createNumberInput(): FormGroup {
    return this.fb.group({
      number: ['']
    });
  }

  get numberArray(): FormArray {
    return this.numberForm.get('numbers') as FormArray;
  }

  addNumberInput(): void {
    this.numberArray.push(this.createNumberInput());
  }

  removeNumberInput(index: number): void {
    this.numberArray.removeAt(index);
  }
  
}
