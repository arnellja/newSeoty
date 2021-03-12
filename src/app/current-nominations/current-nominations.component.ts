import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-current-nominations',
  templateUrl: './current-nominations.component.html',
  styleUrls: ['./current-nominations.component.css']
})
export class CurrentNominationsComponent implements OnInit {
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
