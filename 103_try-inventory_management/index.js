class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }


    restock(amount) {
        this.quantity += amount;
    }

    sell(amount) {
        this.quantity = Math.max(0, this.quantity - amount);
    }
}

const pen = new Item("Pen", 60);
const book = new Item("Book", 30);
const laptop = new Item("Laptop", 15);

pen.restock(14);
book.restock(10);
laptop.restock(22);

pen.sell(44);
book.sell(10);
laptop.sell(7);

const storeInventory = [pen, book, laptop];

console.log(pen);
console.log(book);
console.log(laptop);
console.log(storeInventory);

