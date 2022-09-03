// //How to begin: 
// Create a new HTML/CSS/JS and complete the following in your .js file
// Make a radio Object.Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)
 

// Submission: Submit a share link of your repl file here! 



//  let radio = {
//    radio.Stations = ['hot 97','power 105.1','streets 94.5']
//    let hot97 = new station ('hot 97')
//    let power = new station ('power 105.1')
//    let street = new station ('streets 94.5')
// }
   
// let station = {
//     station.name = 'name'
//     station.music =['song','song1','song3','song4']
//     changeStation: () => {
//         //get random index for station
//         let StationNumGenerator = Math.floor(Math.random() * station.music.length);
//         let stationName = radio.stations[StationNumGenerator].name;
//     }

// let song = {
//     Song.title = 'title'
//     Song.artist = 'artist'
// }


//     console.log(`Now Playing: ${radio.Stations} by ${artist}`);
// },


//    let radio = radio.stations[StationNumGenerator].songs[randomSong].title;
//    let artist = radio.stations[StationNumGenerator].songs[randomSong].artist;
  
//       console.log('${stations}station in currently playing')

//   radio.changeStation();



const hot97 ={
    name: 'hot 97',
    song: [{title:'sideways'},{artist:'cleo sol'},{title:'bad habit'},{artist:'steve lacy'},{title:'next lifetime'},{artist:'eryakah badu'}]
}

const power105 ={
    name: 'power 1051',
    song: [{title:'peace of mind'},{artist:'lauryn hill'},{title:'loose change'},{artist:'lauryn brent faiyaz'},{title:'dont leave your girl'},{artist:'kirby'}]
}
 
const streets94 ={
    name: 'streets 945',
    song: [{title:'yebbas heartbreak'},{artist:'drake'},{title:'father time'},{artist:'kendrick lamar'},{title:'cause I love you'},{artist:'lenny williams'}]
}

let radio = {
    station: ['hot 97','power 1051','streets 945'],
} 

console.log(radio.station[Math.floor(math.random()*radio.station.length)])

console.log(`now playing:${title}by ${artist}`)


