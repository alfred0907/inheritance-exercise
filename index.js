const character = {
    name: '',
    attack: function(target) {
        console.log(`${target.name} takes damage`)
    },
    heal: function(target) {
        console.log(`${this.name} healed ${target ? target.name : ''}`)
    },
    changeName: function(newName) {
        this.name = newName
    }
}

const player1 = Object.create(character, {
    name : {
        value: 'player 1',
        writable: true
    }
})

const player2 = Object.create(character, {
    name: {
        value: 'player 2',
        writable: true
    }
})

player1.changeName('alfred')
player2.changeName('bogart')
player1.attack(player2)
player2.heal()
player1.heal(player2)
