import { mul } from 'Src/d';
import('./b.js').then(m => m.add(200, 100));
export function sub(a, b) {
  return a - b + mul(100, 50);
}
