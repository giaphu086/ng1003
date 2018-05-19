import { Component, Input } from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-word-item',
  template: `
    <div class="word-container">
      <h3 class="text-success">{{ wordInfo.en }}</h3>
      <h3 class="text-danger">
          Mot
      </h3>
      </div>
      <div class="btn-container">
      <button
          class="btn btn-success"
      >
        Memorized
      </button>
      <button
          class="btn btn-warning"
      >
          Remove
      </button>
    </div>
  `
})

export class WordItemComponent {
  @Input() wordInfo: Word;
}