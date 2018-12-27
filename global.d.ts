import * as WebApis from './webapis';
import * as Tizen from './tizen';
import * as Msf from './msf';

declare global {
  const msf: typeof Msf;
  const tizen: typeof Tizen;
  const webapis: typeof WebApis;
}