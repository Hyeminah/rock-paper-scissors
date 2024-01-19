import { writable } from "svelte/store";

export const computeurScore = writable(0);
export const userScore = writable(0);

// score.subscribe((value) => {
//   console.log(value);
// }); // logs '0'

// score.set(0); // logs '1'

// setInterval(() => {
//   score.update((n) => n + 1); // logs '2'
// }, 1000);
