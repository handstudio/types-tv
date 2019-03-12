/// <reference path="./webapis/index.d.ts"/>
/// <reference path="./tizen/index.d.ts"/>
/// <reference path="./avplayer/index.d.ts"/>

import * as webapis from './webapis';
import * as tizen from './tizen';
import * as stvplayer from './avplayer';

export const WebApis: typeof webapis;
export const Tizen: typeof tizen;
export const Player: typeof stvplayer;