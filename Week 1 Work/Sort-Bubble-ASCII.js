class Bubble {
  constructor(array) {
    //Initialised Global Variables
    this.sorted = true
    this.array = array
  }
  sort() {
    while (this.sorted) {
      for (let i = 0; i < this.array.length; i++) {
        if (i === 0) {
          this.sorted = false
        }
        let currentEl = this.array[i] //current word
        let nextEl = this.array[i + 1] //next word
        if (nextEl) {
          let charIndex = 0
          // The first Letter is converted to a ASCII Character //
          let current_letter = this.charToNum(currentEl.substr(0, 1))
          let next_letter = this.charToNum(nextEl.substr(0, 1))

          //Search each letter Until they are different from each other//
          while (current_letter == next_letter) {
            charIndex++
            current_letter = this.charToNum(currentEl.slice(charIndex, charIndex + 1))
            next_letter = this.charToNum(nextEl.slice(charIndex, charIndex + 1))
          }
          //Switch Places if current is bigger than next letter
          if (current_letter > next_letter) {
            this.array[i] = nextEl
            this.array[i + 1] = currentEl
            this.sorted = true
          }
        }
      }
    }
    return (this.array)
  }
  charToNum(str){
    const lengthOfStr = str.length
    let totalNumber = 0
    const totalAlphabetLetters = 26
    const letterStart = 96 //Letters Start From 96 on the ASCII table
    for (let i = 0; i < lengthOfStr; i++) {
      let multiplier = i * (totalAlphabetLetters-1) //Letters of the Alphabet
      totalNumber += (str.charCodeAt(i) - letterStart) + multiplier;
    }
    return totalNumber
  }
}

const ranks=['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
const suits = ['Hearts','Diamonds','Clubs','Spades']

const arranged_suits = new Bubble(suits).sort()

for(let i=0;i<ranks.length;i++){
  for(let j=0;j<arranged_suits.length;j++){
     console.log(`${ranks[i]} of ${arranged_suits[j]}`)
  }
}
