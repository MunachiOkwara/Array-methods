// let someArray = ["Isreal", "Fathi", "izu", "Muna", "Ebuka", "Kola", "Nonso", "victor", "stanley"];

// let numArray = [2, 4, 6, 8, 10, 12,];

// let redArray = numArray.reduce((e,f)=> e + f, 0);
//  console.log(redArray)      


//   const container  = document.getElementById('root');
//   const root = ReactDOM.createRoot(container);

// let element = <h1>Hello, Muna</h1>
//   function MunaApp() {
//     let darkMode = false;
//     let darkStyle ={
//       backgroundColor: "#333",
//        padding: 10
//       };
//     let lightStyle = {
//       backgroundColor: "yellow",
//       color: "black",
//       padding: 10
//     };
//     return <>
//     <div style={darkMode ? darkStyle: lightStyle}>
//       <h1>Welcome to React!</h1>
//      <p>I am just learning React for the first time </p>
     
//     </div>
//     </>
//     ;
//   }
//   function FathiApp() {
//     return <>
//     <div>
//       <h2>Welcome to Fathia!</h2>
//       <p> I am just learning React for the first time</p>
//     </div>
//     </>
//   ;
//   }
//  function MyApp(){
//   return<>
//      <MunaApp/>
//      <FathiApp/>
//   </>;
//  }

//   root.render(<MyApp/>); 

//   console.log(root);


  // let numArray = [2, 4, 7, 9];
  // let redArray = numArray.reduce((prev, el)=> prev -2 + el, 0);
  // console.log(redArray);

  // [5, 4, 3, 1].reduce((e, l)=> e + 1 -l, 4)

//   let strArray =["curry"]
//   let mapArray =strArray.map

//   let stringArray = ["kepa", "pinto", "deGea", "Martinze", "pickford", "ramsdale",];
//   let filteredArray = stringArray.filter((el)=> !el.toUpperCase().includes("P"));
//   console.log(filteredArray);


//  let numArray =[2, 4, 6, 7];
//   let redArray = numArray.includes

//   let numArray = [2, 4, 6, 9]
//   let redArray = numArray.forEach   

 /* ARRAY METHODS
  MAP METHOD
  Map calls a defined callback function on each element of an array and returns
  an array that contains the result. 
  Parameters: It has 3 arguments= value, string and index.
  result: boolean or array.
  EXAMPLES*/

  /* const numbers = [4, 9, 16, 25];
   const newArr = numbers.map(Math.sqrt)
   console.log(newArr)

    const persons = [
    {firstname : "Munachiso", lastname: "Okwara"},
    {firstname : "Kola", lastname: "Adams"},
    {firstname : "Fathia", lastname: "Salau"}    
  ];
   persons.map(getFullName);    
  
   function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");  
  }           
  console.log(persons)   
  
  const array1 = [1, 4, 9, 16];           
  const map1 = array1.map(x => x * 2);       
  console.log(map1);

  const array2 = [0, 1, 2, 3, ];
  const map2 = array2.map(x => x + 22);
  console.log(map2);  

  const array3 = [5, 10, 15, 20, ];
  const map3 = array3.map(x => x - 5);
  console.log(map3);

  const array4 = [ 10, 15, 20, 25 ];
  const map4 = array4.map(x => x / 5);
  console.log(map4);       

  const countries = [
    {firstname : "London", lastname: "Egypt"},
    {firstname : "America", lastname: "Southafrica"},
    {firstname : "Australia", lastname: "Japan"}
  ];
   persons.map(getFullName);
  
   function getFullName(item) {
    return [item.firstname,item.lastname];
  }
  console.log(countries)

  let stringArray = ["kepa", "pinto", "deGea", "Martinze", "pickford", "ramsdale",];
  let mapArray = stringArray.map((el)=> !el.toUpperCase().includes("P"));
  console.log(mapArray);

  const strArray = ["Orange", "salt", "maggi", "onions", "pepper"];
  const mapArray1 = strArray.map((el)=> !el.includes("o"));
  console.log(mapArray1);
  
 const array5 = ["my", "name", "is", "muna"];
 const map5 = array5.map((el)=> el.toUpperCase());
 console.log(map5);

 /*FILTER METHOD
 Filter returns the element of an array that
 meets the specified condition in a callback function.
 Parameters:It has 3 arguments= value, string and index.
 result: boolean or array.
 EXAMPLES

  const scores = [70, 50, 80, 30];
  const result = scores.filter(checkMark);
  
  function checkMark(score) {
    return score >= 50;
  }
  console.log(result)

  let verbs = ['cooking', 'jumped', 'running', 'dancing', 'run', 'cooked'];
  let result1 = verbs.filter(verb => verb.length >= 6);  
   console.log(result1);
  
   function isSmallEnough(value) {
    return value <= 10;
  }
  const filtered = [10, 5, 8, 100, 47].filter(isSmallEnough);                            
  console.log(filtered)                                                

  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  function isThe(num) {
  for (let i = 2; num >= i; i++)
  return num > i;
 }
 console.log(array.filter(isThe)); 
  
 const emotions = ["JOY", "LOVE", "HOPE", "PATIENCE", "ANGER"];
 function filterItems(arr, query) {
  return arr.filter((el) => el.toUpperCase().includes(query.toUpperCase()));
 }
 console.log(filterItems(emotions, "O")); 

 let words = ["date", "happy", "oscillate", "cankerous", "honey", "present"];
 const modifiedWords = words.filter((word, index, arr) => {                         
   return word.length < 6;
 });                                                                                
 console.log(modifiedWords);
 
 words = ["date", "happy", "oscillate", "cankerous", "honey", "present"];
 const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
 });
 console.log(deleteWords);
 
 let scores1 = [43, 23, 18, 90, 6, 55, 30];
 const result2 = scores1.filter(checkGrade);
 function checkGrade(score) {
  return score >= 43;
 }
 console.log(result2);

 let nouns = ["Chioma", "Somto","Abuja", "Village", "Munachi", "House"];
 let name = nouns.filter(noun=> noun.length >=6);
 console.log(name);

 let cartoons = ["tom&jerry", "spongebobs", "mickey-mouse", "snow-white"];
 let favouritecartoon = cartoons.filter(cartoon=> cartoon.length <=9);
 console.log(favouritecartoon);

 /*REDUCE METHOD
 It takes the values for all the element in an array,
 and applies functionality such that it changes the array into
 one singular value. Hence, it reduces the array.
 Parameters:It has 4 arguments= previousvalue, currentvalue, currentindex and array.
 result: A single value or boolean.
 EXAMPLES

 let someArray = ["Mr", "Colin", "sorry", "for", "submitting", "late" ];
 const sorrySir = someArray.reduce((allSomeArray, someArray) => {
  const currCount = allSomeArray[someArray] ?? 0;
  return {
    ...allSomeArray,
    [someArray]: currCount + 1,
  };
 }, {});
 console.log(sorrySir);

 let numArray = [2, 4, 6, 8, 10, 12,];
 let redArray = numArray.reduce((e,f)=> e + f, 0);
 console.log(redArray)      

 const numbers = [175, 50, 25];
 const result= numbers.reduce(myFunc);
 function myFunc(total, num) {
  return total - num;
 }
 console.log(result);

 const numbers1 = [15.5, 2.3, 1.1, 4.7];
 result1 = numbers1.reduce(getSum, 0);
 function getSum(total, num) {
   return total+math.round() (num);
 }
 console.log(result1);

 const numbers2 = [84, 16, 36, 25];
 result2 = numbers2.reduce(getSum, 0);
 function getSum(total, num) {
   return total + Math.sqrt(num);
 }
 console.log(result2);
 
 const array1 = [5, 2, 7, 4];
 const initialValue = 0;
 const sumWithInitial = array1.reduce(
   (accumulator, currentValue) => accumulator + currentValue,
   initialValue
 );
  console.log(sumWithInitial);
 
  const names = ["Chidera", "Ugo", "Mum", "Dad", "Ebube"];
  const countedNames = names.reduce((allNames, name) => {
    const currCount = allNames[name] ?? 0;
    return {
      ...allNames,
      [name]: currCount + 1,
    };
  }, {});
  console.log(countedNames);

 const friends = [
  {
    name: "Muna",
    books: ["Who-moved-my-chesse", "Dr Spencer Johnson"],
    age: 45,
  },
  {
    name: "Fathia",
    books: ["Second class citizen", "Buchi Emecheta"],
    age: 49,
  },
  {
    name: "Grace",
    books: ["weep not my child", "Ngugi Wa Thiong o"],
    age: 60,
  },
 ];
 const allbooks = friends.reduce(
  (accumulator, currentValue) => [...accumulator, ...currentValue.books],
  ["Favourite Books"],
 );
 console.log(allbooks)

 const naira = [ 100, 50, 1000];
 const trippled = naira.reduce((total, amount) => {
  total.push(amount * 3);
  return total;
 }, []);
 console.log(trippled);

 const pounds = [ 100, 50, 1000];
 const doubled = naira.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
 }, []);
 console.log(doubled);*/

  /*SLICE METHOD
 It extracts the part of a given array and returns it.
 slice method does not change the original array.
 Parameters:It has 2 arguments= start index & end index.
 result: An array.
 EXAMPLES

 const problems = ["Alert", "Front-End-Guys", "Hmmmm", "We", "Are", "In", "Trouble"];
 const solutions = problems.slice([1]);
 console.log(solutions);

 let bts = [ "Lee-min-hoo", "Jungkook", "V",  "Suga", "Jin", "Rm", "J-hope", "Jimin" ];
 let membersBangtan = bts.slice(1);
 console.log(membersBangtan);

 let numbers = [2, 4, 6, 7, 11, 19, 17];
 let newArray = numbers.slice(3, 5);
 console.log(newArray);

 let stacks = ['Front-End', 'Back-End', 'Full-Stack']
 let new_arr = stacks.slice();
 console.log(new_arr); 

 let dresses = ['skirt', 'scarf', 'trousers', 'bom-shot', 'singlet' ];
 let new_arr1 = dresses.slice(2);
 console.log(new_arr1); 

 let words = ['Do', 'You', 'Know', 'That', 'I', 'Am', 'Adorable', 'Right?' ]
 let new_arr2 = words.slice(1, 7);
 console.log(new_arr2); 

 let foods = ['beans',"rice", "yam", 'custard', "fried-fish" ];
 let foodNonsense = foods.slice(1);
 console.log(foodNonsense);

 const years = [2000, 2001, 2002, 2003, 2004];
 let yearBorn = years.slice(3, 4);
 console.log(yearBorn);

 let movies = ['Star-Wars', 'Black-Panter', 'Iron-Man', "Hits-Man-Bodyguard" ];
 const favourite = movies.slice(3);
 console.log(favourite);

 let snacks = ["crackers", 'waffles', "popcorn", 'oreos', "cookies" ];
 const best =snacks.slice(0, 1);
 console.log(best);*/

  /*LENGTH METHOD
 It returns the number of parameters litsed inside a function.
 Parameters:It has up to 225.
 result: An array.
 EXAMPLES

 let snacks = ["crackers", 'waffles', "popcorn", 'oreos', "cookies" ];
 console.log(snacks.length);

 let movies = ['Star-Wars', 'Black-Panter', 'Iron-Man', "Hits-Man-Bodyguard" ];
 console.log(movies.length);

 const years = [2000, 2001, 2002, 2003, 2004];
 console.log(years.length);

 let foods = ['beans',"rice", "yam", 'custard', "fried-fish" ];
 console.log(foods.length);

 let words = ['Do', 'You', 'Know', 'That', 'I', 'Am', 'Adorable', 'Right?' ]
 console.log(words.length); 

 let dresses = ['skirt', 'scarf', 'trousers', 'bom-shot', 'singlet' ];
 console.log(dresses.length); 

 let stacks = ['Front-End', 'Back-End', 'Full-Stack']
 console.log(stacks.length); 

 let numbers = [2, 4, 6, 7, 11, 19, 17];
 console.log(numbers.length);

 let bts = [ "Lee-min-hoo", "Jungkook", "V",  "Suga", "Jin", "Rm", "J-hope", "Jimin" ];
 console.log(bts.length);

 const problems = ["Alert", "Front-End-Guys", "Hmmmm", "We", "Are", "In", "Trouble"];
 console.log(problems.length); */

 /*CONCAT METHOD
 It used to join two or more strings and it does not change the existing array.
 Parameters: accepts one or more strings
 result: A string.
 EXAMPLES

 const arr1 = [5, 4 , 3, 2];
 const arr2 = [1, 6, 7, 8];
 const arr3 = arr1.concat(arr2);
 console.log(arr3);

 let name1 = ['adaugo', "precious", 'kola', "debby"];
 let name2 = ['john', 'sule', 'musa', "chisom" ];
 let name3 = name1.concat(name2);
 console.log(name3);

 let crush1 = ['adaugo', "precious", 'kola', "debby"];
 let crush2 = ['john', 'sule', 'musa', "chisom" ];
 let crush3 = name1.concat(crush2);
 console.log(crush3);

 const animals1 = ['goat', 'lion' , 'deer', 'rat'];
 const animals2 = ['monkey', 'ram', 'lamb', "cat"];
 const animals3 = animals1.concat(animals2);
 console.log(animals3);

 const dates1 = ['1st', '2nd' , '3rd', '4th'];
 const dates2 = ['5th', '6th', '7th', "8th"];
 const dates3 = dates1.concat(dates2);
 console.log(dates3);

 let part1 = ['eyes', 'nose', 'ear',]
 let part2 = ['head', 'teeth', 'hand',]
 let part3 = part1.concat(part2);
 console.log(part3);

 const num1 = [55, 45 , 35, 25];
 const num2 = [15, 65, 75, 85];
 const num3 = num1.concat(num2);
 console.log(num3);

 let tools1 = ['hoe', 'axe', 'razor' ];
 let tools2 = ['hammer', 'saw', 'chisel'];
 let tools3 = tools1.concat(tools2);
 console.log(tools3);

 let colours1 = ['blue', 'black', 'red' ];
 let colours2 = ['grey', 'pink', 'yellow'];
 let colours3 = colours1.concat(colours2);
 console.log(colours3);

 const number1 = [551, 452 , 353, 254];
 const number2 = [156, 657, 758, 850];
 const number3 = number1.concat(number2);
 console.log(number3);*/

 /*PUSH METHOD
 It appends new elements to the end of an array, and returns the new length of the array.
 Parameters: items
 result: new elements to add to the array.
 EXAMPLES

 const problems = ["Alert", "Front-End-Guys", "Hmmmm", "We", "Are", "In", "Trouble"];
 const solutions = problems.push('hey');
 console.log(solutions);

 let bts = [ "Lee-min-hoo", "Jungkook", "V",  "Suga", "Jin", "Rm", "J-hope", "Jimin" ];
 let membersBangtan = bts.push('good');
 console.log(membersBangtan);

 let numbers = [2, 4, 6, 7, 11, 19, 17];
 let newArray = numbers.push(8);
 console.log(newArray);

 let stacks = ['Front-End', 'Back-End', 'Full-Stack']
 let new_arr = stacks.push('UI');
 console.log(new_arr); 

 let dresses = ['skirt', 'scarf', 'trousers', 'bom-shot', 'singlet' ];
 let new_arr1 = dresses.push('glooves');
 console.log(new_arr1); 

 let words = ['Do', 'You', 'Know', 'That', 'I', 'Am', 'Adorable', 'Right?' ]
 let new_arr2 = words.push('yhhh');
 console.log(new_arr2); 

 let foods = ['beans',"rice", "yam", 'custard', "fried-fish" ];
 let foodNonsense = foods.push('egg');
 console.log(foodNonsense);

 const years = [2000, 2001, 2002, 2003, 2004];
 let yearBorn = years.push(1999);
 console.log(yearBorn);

 let movies = ['Star-Wars', 'Black-Panter', 'Iron-Man', "Hits-Man-Bodyguard" ];
 const favourite = movies.push('X-Men');
 console.log(favourite);

 let snacks = ["crackers", 'waffles', "popcorn", 'oreos', "cookies" ];
 const best =snacks.push('nuts');
 console.log(best);*/

 /*TOSTRING METHOD                                                                                 
 It returns a string as a string and it doesn't change the original string.
 Parameters: none
 result: string value
 EXAMPLES

 let text = "Howdy!";
 let result = text.toString();
 console.log(result);

 let text1 = ['I', 'am', 'very', 'tired'];
 let result1 = text1.toString();
 console.log(result1);

 let text2 = ['look', 'at', 'your', 'head'];
 let result2 = text2.toString();
 console.log(result2);

 let text3 = ['this', 'is', 'my', 'story'];
 let result3 = text3.toString();
 console.log(result3);

 let text4 = ['front-end', 'wahala', 'dey', 'ooooo'];
 let result4 = text4.toString();
 console.log(result4);

 let text5 = ['I', 'am', 'writing', 'a', 'new', 'book'];
 let result5 = text5.toString();
 console.log(result5);

 let text6 = ['what', 'is', 'your', 'name'];
 let result6 = text6.toString();
 console.log(result6);

 let text7 = ['pass', 'on', 'the', 'touch'];
 let result7 = text7.toString();
 console.log(result7);

 let text8 = ['spaghetti', 'is', 'my', 'favourite', 'food'];
 let result8 = text8.toString();
 console.log(result8);

 let text9 = ['today', 'was', 'stressful', 'like.....'];
 let result9 = text9.toString();
 console.log(result9);

 let text10 = ['I', 'want', 'to', 'live', 'this', 'country'];
 let result10 = text10.toString();
 console.log(result10);*/

 /*POP METHOD                                                                                 
 It removes the last element from an array and returns the removed element to the caller.
 Parameters: none
 result: string value or number.
 EXAMPLES

 const family = ['father', 'mother', 'children', 'aunty', 'uncle'];
 console.log(family.pop());

 const games = ['ps4', 'temple-run', 'car-race', 'sudoku', 'ludo'];
 console.log(games.pop());

 const spongebobs = ['patrick', 'mr crabs', 'gerry', 'squidword', 'sindi'];
 console.log(spongebobs.pop());

 const bluey = ['dad', 'mom', 'bluey', 'bingo'];
 console.log(bluey.pop());

 const languages = ['igbo', 'yorouba', 'tivi', 'hausa'];
 console.log(languages.pop());

 const sports = ['foot-ball', 'basket-ball', 'hockey', 'table-tenis'];
 console.log(sports.pop());

 const profession = ['teaching', 'doctor', 'lawyer', 'capentry', 'banker'];
 console.log(profession.pop());

 const subjects = ['government', 'history', 'english', 'literature', 'mathematics'];
 console.log(subjects.pop());

 const states = ['Lagos', 'Imo', 'Delta', 'Edo', 'Akwa-ibom'];
 console.log(states.pop());

 const extensions = ['colour-picker', 'live-server', 'code-snap', 'prettier'];
 console.log(extensions.pop());*/

 /*INCLUDES METHOD                                                                                 
 It determines whether an array includes a certain element, returning 
 true or false as appropraite.
 Parameters: none
 result: boolean.
 EXAMPLES

 const array = [8, 0, 3];
 console.log(array.includes(3));

 const cutlery = ['spoon', 'fork', 'knife'];
 console.log(array.includes('plate'));

 const makeUp = ['lip-gloss', 'eye-liner', 'eye-pencil'];
 console.log(makeUp.includes('lip-gloss'));

 const robots = ['lap-top', 'tablet', 'i-phone'];
 console.log(robots.includes('ear-piece'));

 let myBrothers = ['Ugo', 'Ebube', 'Ozioma', 'Promise', 'Udoka', 'jeppee'];
 console.log(myBrothers.includes('Udoka'));

 const country = ['london', 'korea', 'china'];
 console.log(country.includes('egypt'));

 const letters = ['a', 'b', 'c'];
 console.log(letters.includes('e'));

 const num = [44, 98, 32];
 console.log(num.includes(6));

 const arr = ['jeep', 3, 'honda'];
 console.log(arr.includes('jeep'));

 let drinks = ['coke', 'fanta', 'sprit', 'Pepsi' ];
 console.log(drinks.includes('fanta'));*/

