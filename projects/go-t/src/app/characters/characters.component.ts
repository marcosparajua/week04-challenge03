import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Character } from '../core/character';
import { CHARACTERS } from '../core/data';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: ``,
})
export class CharactersComponent {
  id = '';
  name = '';
  house = '';
  age = 0;
  isAlive = true;
  constructor() {}
}
