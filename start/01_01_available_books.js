// Write your code here
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  getAvailability() {
    if (this.numCopies <= 0) return "Out of stock";
    else if (this.numCopies >= 10) return "In stock";
    else return "Low stock";
  }

  get availability() {
    return this.getAvailability();
  }

  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  restock(numCopies = 5) {
    this.numCopies += numCopies;
  }
}

const askIwata = new Book("Ask Iwata", "Satoru Iwata", 4516, 10);
askIwata.sell();
console.log(askIwata.availability);
askIwata.sell(9);
console.log(askIwata.availability);
askIwata.restock();
console.log(askIwata.availability);
askIwata.restock(23);
console.log(askIwata.availability);
