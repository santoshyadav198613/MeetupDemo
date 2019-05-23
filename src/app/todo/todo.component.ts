import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder,
  FormControl, FormArray, Validators
} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskForm: FormGroup;

  addressForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.taskForm = this.fb.group({
      task: this.fb.array([
        this.buildForm()
      ], { updateOn: 'submit' })
    });

    this.addressForm = this.fb.group({
      addressLine1: new FormControl('', [Validators.required]),
      addressLine2: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    });
  }

  private buildForm(): any {
    return this.fb.group(
      { name: new FormControl('', Validators.required) }
    );
  }

  addTask() {
    const taskList = this.taskForm.get('task') as FormArray;
    taskList.push(this.buildForm());
  }

  markAsTouched() {
    this.addressForm.markAllAsTouched();
    this.taskForm.markAllAsTouched();
  }

  clear() {
    const taskList = this.taskForm.get('task') as FormArray;
    taskList.clear();
  }

}
