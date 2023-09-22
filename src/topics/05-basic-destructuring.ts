
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

/* console.log('volume:', volume);
console.log('details:', details);
console.log({author});
console.log({year}); */

///desestructuracion arreglos

const dbz:string[] = ['Goku','vegeta','Trunks']

const [p1,p2,p3,p4 = 'not found']:string[] = dbz

console.log('personaje 3 :', dbz[3] || 'No hay personaje');
console.log({p1});
console.log({p4});



export {}