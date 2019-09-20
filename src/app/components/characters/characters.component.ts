import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input() AreSkeletons: boolean;
  message: string;
  characters: any;
  constructor(private character: CharacterService) { }
  isResults: boolean = false;
  charType:string;
  ngOnInit() {
    this.getCharacterInfo();
  }
  getCharacterInfo(): any {
    if (this.AreSkeletons) {
      this.message = 'You dont have any Character Outlines made! Why dont you create a new one?';
      this.character.getCharacterSkeletons().subscribe(e => {
        console.log(e);
        this.characters = e;
        this.charType = 'Outline';
        if (e[0] != null) {
          this.isResults = true;
        }
      });
    }
    else if (!this.AreSkeletons) {
      this.message = 'You dont have any Instance Characters! Join a new game to create one!';
      this.character.getCharacterInstances().subscribe(e => {
        console.log(e);
        this.characters = e;
        this.charType = 'Instance';
        if (e[0] != null) {
          this.isResults = true;
        }
      });
    }
  }
}
