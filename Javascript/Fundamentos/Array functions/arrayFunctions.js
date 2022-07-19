 // array 

 
 const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

 

// MAP
//1 Get an array of all names
//2 Get an array of all heights
//3 Get an array of objects with just name and height properties
//4 Get an array of all first names

// REDUCE
//1 Get the total mass of all characters
//2 Get the total height of all characters
//3 Get the total number of characters in all the character names
//4 Get the total number of characters by eye color (hint. a map of eye color to count)

// FILTER
//1 Get characters with mass greater than 100
//2 Get characters with height less than 200
//3 Get all male characters
//4 Get all female characters
  

// SORT
//1 Sort by name
//2 Sort by mass
//3 Sort by height
//4 Sort by gender

// EVERY
//1 Does every character have blue eyes?
//2 Does every character have mass more than 40?
//3 Is every character shorter than 200?
//4 Is every character male?

// SOME
//1 Is there at least one male character?
//2 Is there at least one character with blue eyes?
//3 Is there at least one character taller than 200?
//4 Is there at least one character that has mass less than 50?

map1 = characters.map( char=> char.name)
map2 = characters.map( char => char.height)
map3 = characters.map( char => ({name: char.name, height: char.height}))
map4 = characters.map( char => char.name.split(' ')[0])

reduce1 = characters.reduce( (acc, cur) => acc + cur.mass, 0 ) 
reduce2 = characters.reduce( (acc, cur) => acc + cur.height, 0)
reduce3 = characters.reduce( (acc,cur) => acc + cur.name.length, 0)
reduce4 = characters.reduce( (acc, cur) => {
  const color = cur.eye_color;
  if( acc[color]){
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc
}, {} )

filter1 = characters.filter(character => character.mass > 100 )
filter2 = characters.filter(char => char.height < 200)
filter3 = characters.filter( char => char.gender === 'male')
filter4 = characters.filter ( char=> char.gender ==='female')

sort1 = characters.sort( (a,b) => a.name < b.name ? -1 : 1);
sort2 = characters.sort( (a,b) => b.mass - a.mass)
sort3 = characters.sort( (a,b) => a.height - b.height )
sort4 = characters.sort( (a,b) => a.gender === "female" ? -1 : 1)

every1 = characters.every( char => char.eye_color ==='blue')

some1 = characters.some( char => char.gender === "male");
some2 = characters.some( char => char.eye_color === "blue")
some3 = characters.some( char => char.height > 200)
some4 = characters.some( char => char.mass < 50)
 
every1 = characters.every( char => char.eye_color ==='blue')
every2 = characters.every( char => char.mass > 40)
every3 = characters.every( char => char.height < 200)
every4 = characters.every( char => char.gender === 'male')

 // LOG
console.log(every4);