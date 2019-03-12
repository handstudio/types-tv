/// <reference path="./avplayer.d.ts"/>

import { Avplayer } from './avplayer';

declare const Player: Player.PlayerStatic;
declare module Player {
  interface PlayerStatic {
    Avplayer: typeof Avplayer.Player;
  }
}