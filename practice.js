// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.

/*
I- array
O- number of values in array that are multiple of 5
C- no for loop
E- none

create counter function

for each value in array,
  if value % 5 === 0
    increment counter fuction by one
return counter function

*/
var multiplesOfFive = function (numbers) {
  var counter = 0;

  _.each(numbers, function(num) {
    if (num % 5 === 0) {
      counter++
    }
  });
  return counter;
};


/*
I- obj with 'user'(str) and 'message'(str) as a keys
O - array with messages belonging to the user
C- use _.each
E - none

create var
  _.each pass in (key, value)
  if collection key === user
  return value
*/

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var userTweets = [];
  _.each(tweets, function(value) {
    if (value['user'] === user) {
      userTweets.push(value);
    }
  })
  return userTweets;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
/*
I- array of fruits (str), desired fruit
O - an
C
E
 */
var onlyOneFruit = function (fruits, targetFruit) {
  return _.filter(fruits, function(value) {
    if (value === targetFruit) {
      return value;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.

/*
I- array with listed fruits, target letter
O- array with only fruits starting with target letter
C- no use for loop,should not create new arrays, USE FILTER
E- none

filter
  if value at 0 index is  equal to targetfruit
    return value
*/
var startsWith = function (fruits, letter) {
  return _.filter(fruits, function(value) {
    if (value[0] === letter) {
      return value;
    }
  })
};

// return a filtered array containing only cookie-type desserts.
/*
I - array of objs (name, ingredients, type)
O- array with values that are only cookie types
C- no for loop, no create new arrays
E-  none

use filter
  if value type = target type (cookie)
  return value
*/

var cookiesOnly = function (desserts) {
  return _.filter(desserts, function(value) {
    if (value['type'] === 'cookie') {
      return value;
    }
  });
};

// rebuild the getUserTweets function from above with _.filter instead
/*
I- array of objects (user, message, createdAt, profilePhotoUrl);
O- array with messages belonging to the user
C- no for loop, no new arrays,
E- none

filter (value)
  if value['user] = user
  return value
*/
var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function(value) {
    if (value['user'] === user) {
      return value;
    }
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.

/*
I- array of strings
O- new  array with strings converted to uppercase
C-

map -- pass in value and function that does:
  value to uppercase
  return value

*/
var upperCaseFruits = function (fruits) {
  return _.map(fruits, function (value) {
    return value.toUpperCase();
  })
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.

/*
I- array with objects containing name, ingredient, type of dessert
O- new array with glutenFree as a property and a true or false value
C- use _.map,
E. none

return map (will make new array) within that function
  create new property equal to false
  if value at ingredient equal to flour
    new property is equal to true

*/
var glutenFree = function (desserts) {
  return _.map(desserts, function(value) {
    if (value['ingredients'].includes('flour')) {
      value['glutenFree'] = false;
      return value;
    } else {
      value['glutenFree'] = true;
      return value;
    }
  });
};



// given an array of tweet objects, return a new array of strings
// containing only the message properties.
/*
I- array of obj (user, message, etc)
O- array of strings containing just messages
C- use map

map with function (value)
  delete all props besides messages
  return value
*/
var allUserMessages = function(tweets) {
  return _.map(tweets, function(value) {
    return value['message'];
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

map (value)
return value at salesPrices = (value at price - coupon)


*/
var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function(value) {
    var noDollarSign = value['price'].slice(1);
    var priceInt = parseFloat(noDollarSign);
    var sale  = (priceInt - (priceInt * coupon)).toFixed(2);

    value['salePrice'] = '$' + sale.toString();
    return value;
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.

/*
I- array of obj (id, product, price)
O- an int- the sum of all prices in obj
C - use reduce,
E. none

reduce
  function that takes in the prices
*/
var sumTotal = function (products) {
  return _.reduce(products, function(memo, num) {
    var noDollarSign = num['price'].slice(1);
    var priceInt = parseFloat(noDollarSign);


    return memo + priceInt;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
/*
I- dessert obj with name, ingredients, type
O - obj with specific amount of a type of dessert
c- not use .reduce
e- none

set an empty obj
every value starting at first value,
 if value === defined
  set type of dessert to 1
  else name of dessert ++

*/
var dessertCategories = function (desserts) {
  var sortedDesserts = {};
  return _.reduce(desserts, function(memo, value) {
    // var sortedDesserts = {};

    if (sortedDesserts[value['type']] === undefined) {
      sortedDesserts[value['type']] = 1;
    } else {
      sortedDesserts[value['type']] += 1
    }
    return sortedDesserts;
  }, 0);
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
  I- array of objects with (user, message, etc, etc)
  O- obj with user and amount of messages

  set obj
  reduce
    if user not defined
*/
var countMessagesPerUser = function(tweets) {
  var tweetCountPerUser = {};
  return _.reduce(tweets, function(memo, value) {
    if (tweetCountPerUser[value['user']] === undefined) {
      tweetCountPerUser[value['user']] = 1;
    } else {
      tweetCountPerUser[value['user']] += 1;
    }
    return tweetCountPerUser;
  }, 0);
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

/*
I. arr of objs with (title, releaseyear, rating, genre, runtime)
O. array with names of movies between 1990 and 2000
C
E
*/
var ninetiesKid = function (movies) {

  return _.reduce(movies, function(newArr, value) {
    if (value['releaseYear'] >= 1990 && value['releaseYear'] <= 2000) {
      newArr.push(value['title']);
    }
    return newArr;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
/*
I.arr of objs with (title, releaseyear, rating, genre, runtime)
O- a boolean, true if a movie exists that has a runtime less than timeLimit
 */
var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function(memo, value) {
    if (value['runtime'] < timeLimit) {
      memo = true;
    }
    return memo;
  }, false);
};
