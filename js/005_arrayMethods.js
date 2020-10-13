const items = [
  {name: 'Bike', price:100},
  {name: 'TV', price:200},
  {name: 'Album', price:10},
  {name: 'Book', price:5},
  {name: 'Book', price:15},
  {name: 'Phone', price:500},
  {name: 'Computer', price:1000},
  {name: 'Keyboard', price:25},
  {name: 'İplik', price:125},
]

const showCase = 1;
if(showCase === 1){
  // 1. (filter)
  const filteredItems = items.filter((item) => {
    return item.price <=100
  });

  console.log("Filter everything under: 100");  
  console.log(filteredItems);
} 

if(showCase === 2){
// 2. (map) allows you array convert to new array
  let i=0;
  const itemNames = items.map((item) => {
    return { isim: item.name, sira: ++i}
  });

  console.log(itemNames);
} 

if(showCase === 3){
  //(find) returns first 
  const foundItem = items.find((item) => {
    return item.name === 'Book'
  });

  console.log(foundItem);
} 

if(showCase === 4){
  //(forEach) 
  items.forEach((item) => {
    console.log(item);
  });  
}

if(showCase === 5){
  //(some) returns boolean if has value returns true
  const hasInexpensiveItems = items.some((item) => {
    return item.price <=0
  });

  if(hasInexpensiveItems){
    console.log('YES');
  } 
  else {
    console.log('NO');
  };
} 

if(showCase === 6){
  //(every) returns true if all items pass condition 
  const hasInexpensiveItems = items.every((item) => {
    return item.price >=0
  });

  if(hasInexpensiveItems){
    console.log('YES');
  }
  else {
    console.log('NO');
  };
}

if(showCase === 7){
  //(reduce) runs function for every single item at array, 0 is starting point 1
  const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
  },0);
  console.log(total);
} 

if(showCase === 8){
  //(includes) 
  const newItems = [1,2,3,4,5];
  const includesTwo = newItems.includes(7);
  console.log(includesTwo);
}

if(showCase === 9){
  //(sort)
  console.log("Sort Alphabetically");
  items.sort(function(a, b){
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
  console.log(items);

  console.log("");
  console.log("Sort Number asc price");
  items.sort(function(a, b){return a.price - b.price});
  console.log(items);

  console.log("");
  console.log("Sort Number desc price");
  items.sort(function(a, b){return b.price - a.price});
  console.log(items);
}

if(showCase === 10){
//(push) - adds a new element to an array
  items.push({name: 'Towel', price:150})
  console.log(items);
}

if(showCase === 11){
//(pop) - removes the last element from an array
  items.pop();
  console.log(items);
}

if(showCase === 12){
//(shift) - removes the first element from an array
  items.shift();
  console.log(items);
}

if(showCase === 13){
//(unshift) - adds the first element from an array
  items.unshift({name: 'Towel', price:150});
  console.log(items);
}

if(showCase === 14){
  //(splice) can be used to add new items to an array
  // The first parameter (2) defines the position where new elements should be added (spliced in).
  // The second parameter (0) defines how many elements should be removed.
  // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 0, "Lemon", "Kiwi");
  console.log(fruits);
  console.log();

  //(splice) method returns an array with the deleted items:
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(0,1);
  console.log(fruits);
}

if(showCase === 15){
  //(slice) slices out a piece of an array into a new array.
  var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  var citrus = fruits.slice(3);
  var citrus2 = fruits.slice(1,3);
  console.log(citrus);
  console.log(citrus2);
}

if(showCase === 16){
  //(reverse) reverses the elements in an array.
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  // First sort the elements of fruits
  fruits.sort();    
  console.log(fruits);    
  // Then reverse the order of the elements
  fruits.reverse();   
  console.log(fruits);    
}

if(showCase === 17){
  // (indexOf) searches an array for an element value and returns its position.
  // If the item is present more than once, it returns the position of the first occurrence.
  // returns -1 if the item is not found.
  var fruits = ["Apple", "Orange", "Apple", "Mango"];
  console.log(fruits.indexOf("Apple"));
}

if(showCase === 18){
  // (lastIndexOf) returns the position of the last occurrence of the specified element    
  var fruits = ["Apple", "Orange", "Apple", "Mango"];
  console.log(fruits.lastIndexOf("Apple"));
}

if(showCase === 19){
  // (findIndex) returns the index of the first array element that passes a test function.  
  var numbers = [4, 9, 16, 25, 29];
  var first = numbers.findIndex(myFunction);

  console.log("First number over 18 has index " + first);

  function myFunction(value, index, array) {
    return value > 18;
  }
}
