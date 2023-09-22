
interface AudioPlayer{
    audioVolume: number
    songDuration: number
    song:string
    details:Details
}

interface Details{
    author: string
    year: number
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:'Ed Sheeran',
        year:2015
    }
}

const {
    audioVolume: volume,
    details,
    details:{year} 
} = audioPlayer

const { author }= details

console.log('volume:', volume);
console.log('details:', details);
console.log({author});
console.log({year});




export {}