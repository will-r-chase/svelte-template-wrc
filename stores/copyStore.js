import { writable } from 'svelte/store';
import * as copy from '../data/copy.json';

export const copyStore = writable(copy);
