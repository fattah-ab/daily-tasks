class Meat {
    constructor(slot, type, weight) {
        this._slot = slot,
        this._type = type,
        this._weight = weight
    }

    get slot() {
        return this._slot;
    }

    get type() {
        return this._type;
    }

    get weight() {
        return this._weight;
    }

    set setSlot (slot) {
        this._slot = slot;
    }

    set setType(type) {
        this._type = type;
    }

    set setWeight(weight) {
        this._weight = weight;
    }
}

class Beef extends Meat {
    constructor(slot, type, weight, status) {
        super(slot, type, weight)
        this.status = status
    }

    set setStatus(status) {
        this.status = status
    }

    // randomStatus(){
    //     const status = ['Rare','Medium','Well Done']
    //     let random = Math.random();
    //      if(random < 0.34){
    //          random = status[0];
    //      } else if(random >= 0.34 && random < 0.67) {
    //          random = status[1];
    //      } else {
    //          random = status[2];
    //      }
         
    //      return random;
    //      this.setStatus = random
    //  }
}

class Mutton extends Meat {
    constructor(slot, type, weight) {
        super(slot, type, weight)
        // this._status = function randomStatus(){
        //     const status = ['Rare','Medium','Well Done']
        //      let random = Math.random();
        //      if(random < 0.34){
        //          random = status[0];
        //      } else if(random >= 0.34 && random < 0.67) {
        //          random = status[1];
        //      } else {
        //          random = status[2];
        //      }
             
        //      return random;
        //  }
    }
}

const beef1 = new Beef(1, "Beef", 500, 'rare');
console.log(beef1);
// console.log(beef1.randomStatus());

class Campfire {
    constructor() {
        this.container = []
        this.fullness = {
            beef: 0,
            mutton:0
        }
    }

    grill(meat){
        this.container.push(meat);  
        console.log(`${meat.type} grill!`)
      }

      eat(steak){
        for(let i = 0; i < this.container.length; i++) {
            if (this.container[i].type === steak) {
                this.container.splice(i, 1);
                console.log(`${steak} eat!`)
            }
            if(steak === 'beef') {
                this.fullness.beef++
            } else {
                this.fullness.mutton++
            }
        }  
    }

    status() {
        return this;
    }
}

const camp = new Campfire();
camp.grill(beef1);
console.log(camp.status());
camp.eat(beef)