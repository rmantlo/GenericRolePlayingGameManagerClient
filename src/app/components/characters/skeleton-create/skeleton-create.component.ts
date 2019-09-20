import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skeleton-create',
  templateUrl: './skeleton-create.component.html',
  styleUrls: ['./skeleton-create.component.css']
})
export class SkeletonCreateComponent implements OnInit {
  skeletonGroup: FormGroup;
  createError: string;
  genders = [
    {value: 0, viewValue: "None"},
    {value: 1, viewValue: "Male"},
    {value: 2, viewValue: "Female"},
    {value: 3, viewValue: "Binary"},
    {value: 4, viewValue: "TransMale"},
    {value: 5, viewValue: "TransFemale"},
    {value: 6, viewValue: "Other"},
  ]
  constructor(private character: CharacterService, private build: FormBuilder) { }

  ngOnInit() {
    this.createCharacterSkeleton();
  }
  @Output() closeModalToggle = new EventEmitter<any>();
  createCharacterSkeleton() {
    this.skeletonGroup = this.build.group({
      FirstName: new FormControl(),
      LastName: new FormControl(),
      Gender: new FormControl(),
      VisualDescription:  new FormControl(),
      BackgroundDescription: new FormControl(),
      HeightInInches: new FormControl(),
      WeightInPounds: new FormControl(),
      PersonalityTraits: new FormControl(),
      Ideals: new FormControl(),
      Bonds: new FormControl(),
      Flaws: new FormControl()
    })
  }
  onSubmit(){
    console.log(this.skeletonGroup.value);
    this.character.createCharacterSkeleton(this.skeletonGroup.value).subscribe(e => console.log(e));
  }
  closeToggle(){
    this.closeModalToggle.emit();
  }
}
