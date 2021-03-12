import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-past-nominations',
  templateUrl: './past-nominations.component.html',
  styleUrls: ['./past-nominations.component.css']
})
export class PastNominationsComponent implements OnInit {
  public nomination: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.nomination = this.formBuilder.group({
      nominationID: ["", [Validators.required]],
      nominator: ["", [Validators.required]],
      nominee:  ["", [Validators.required]],
      department:  ["", [Validators.required]],
      nominationDate:  ["", [Validators.required]],
      contactInfo:  ["", [Validators.required]]
    });
  }

}
