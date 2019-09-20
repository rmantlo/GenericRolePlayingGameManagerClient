import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  urlRoute: any;
  characterInfo: any = {};
  characterHeight: string;
  characterGender: string;
  constructor(private character: CharacterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(e => this.urlRoute = e[1].path);
    if (this.urlRoute == 'Outline') {
      this.character.getCharacterSkeletonDetails(+this.route.snapshot.paramMap.get("id")).subscribe(e => {
        console.log(e);
        this.characterInfo = e;
        if (this.characterInfo.HeightInInches < 12) {
          this.characterHeight = `${this.characterInfo.HeightInInches}"`;
        }
        else {
          let feet = Math.trunc(this.characterInfo.HeightInInches / 12);
          let inches = this.characterInfo.HeightInInches % 12;
          this.characterHeight = `${feet}' ${inches}"`;
        }
        switch (this.characterInfo.Gender) {
          case 0:
            this.characterGender = 'None';
            break;
          case 1:
            this.characterGender = 'Male';
            break;
          case 2:
            this.characterGender = 'Female';
            break;
          case 3:
            this.characterGender = 'Binary';
            break;
          case 4:
            this.characterGender = 'TransMale';
            break;
          case 5:
            this.characterGender = 'TransFemale';
            break;
          case 6:
            this.characterGender = 'Other';
            break;
          default:
            this.characterGender = 'Null';
        }
      });
    }
    else {
      this.character.getCharacterInstanceDetails(+this.route.snapshot.paramMap.get("id")).subscribe(e => {
        console.log(e);
        this.characterInfo = e;
        if (this.characterInfo.HeightInInches < 12) {
          this.characterHeight = `${this.characterInfo.HeightInInches}"`;
        }
        else {
          let feet = Math.trunc(this.characterInfo.HeightInInches / 12);
          let inches = this.characterInfo.HeightInInches % 12;
          this.characterHeight = `${feet}' ${inches}"`;
        }
      });
    }
  }
}
