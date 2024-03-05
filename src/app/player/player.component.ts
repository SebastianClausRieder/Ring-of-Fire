import { CommonModule } from '@angular/common';

import { Component, Input } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { GameService } from '../game.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})

export class PlayerComponent {
  game: Game;

  constructor(public gameService: GameService) {
    this.game = this.gameService.game;
  }
}
