export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(character) {
        if (this.members.has(character)) {
            throw new Error('Такой персонаж уже есть в команде');
        }
        this.members.add(character);
    }

    addAll(...character) {
        character.forEach(elem => this.members.add(elem));
    }

    toArray() {
        this.members = Array.from(this.members);
    }
}