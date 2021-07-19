'use strict';

class AnimalShelter {
  constructor() {
    this.shelter = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(animal) {

    this.shelter[this.rear] = animal;
    this.rear++;
  }

  dequeue(pref) {
    pref = 'dog';

    this.shelter[this.front] = pref;
    delete this.shelter[this.front];
    this.front++;
    if (pref !== 'dog') {
      return null;
    } else
      return pref;

  }

}

let shelterM = new AnimalShelter();

shelterM.enqueue('dog1');
shelterM.enqueue('dog2');
shelterM.enqueue('cat1');
shelterM.enqueue('cat2');
shelterM.enqueue('dog');

shelterM.dequeue('dog');
// shelterM.dequeue();
// shelterM.dequeue();

console.log(shelterM);


