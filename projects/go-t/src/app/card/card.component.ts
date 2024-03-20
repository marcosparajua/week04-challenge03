import { Component } from '@angular/core';
import { CharactersComponent } from '../characters/characters.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CharactersComponent],
  template: `
    <ul>
      @for (item of CHARACTERS; track item.id) {
      <li>
        <img [src]="item.avatar" alt="game of thrones character avatar" />
        <span>Name: {{ item.name }}</span
        ><span>House: {{ item.house }}</span
        ><span>Age: {{ item.age }}</span>
        <button>Speak</button>
        <button type="button" (click)="isAlive = false">Kill</button>
        @if (isAlive=== true) {
        <p>{{ item.name }} is alive</p>
        } @else {
        <p>{{ item.name }} is dead</p>
        }
      </li>

      }
    </ul>
  `,
  styles: `
  img {
    width:100px;
    height: 100px;
  }
  `,
})
export class CardComponent {
  isAlive = true;
  CHARACTERS = [
    {
      id: '1',
      name: 'Joffrey Baratheon',
      house: 'Baratheon',
      age: 18,

      speakLine: 'Vais a morir todos',
      avatar: './assets/joffrey.jpg',
    },
    {
      id: '2',
      name: 'Jaime Lannister',
      house: 'Lannister',
      age: 35,
      isAlive: true,
      speakLine: 'Primero pego y luego pregunto',
      avatar: './assets/jaime.jpg',
    },
    {
      id: '3',
      name: 'Daenerys Targaryen',
      house: 'Targaryen',
      age: 25,
      isAlive: true,
      speakLine: 'Primero pego y luego pregunto',
      avatar: './assets/daenerys.jpg',
    },
    {
      id: '4',
      name: 'Tyrion Lannister',
      house: 'Lannister',
      age: 30,
      isAlive: true,
      speakLine: 'No sé por qué, pero creo que voy a morir pronto',
      avatar: './assets/tyrion.jpg',
    },
    {
      id: '5',
      name: 'Bronn',
      house: 'Lannister',
      age: 40,
      isAlive: true,
      speakLine: 'Soy un loser',
      avatar: './assets/bronn.jpg',
    },
  ];
}
