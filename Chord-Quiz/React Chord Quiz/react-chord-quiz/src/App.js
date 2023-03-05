import { useEffect, useState } from 'react';
// Components
import { Header } from './components/header/header.component';
import { FilterBox } from './components/filter-box/filter-box.component';
import { ChordBox } from './components/chord-box/chord-box.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {

  const [notes, setNotes] = useState([
   "C", "C#", "D", "D#",
   "E", "F", "F#", "G", 
   "G#", "A", "A#", "B",
   "C", "C#", "D", "D#", "E", "F",
   "F#", "G", "G#", "A", "A#", "B"
  ]);

// maybe allow people to add  their own chords
  const [chords, setChords] = useState([
    { name: 'Major', id: 0, pattern: [0, 4, 7] },
    { name: 'Minor', id: 1, pattern: [0, 3, 7] },
    { name: 'Major 7', id: 2 , pattern: [0, 4, 7, 11] },
    { name: 'Minor 7', id: 3, pattern: [0, 3, 7, 10] },
    { name: 'Minor 7b5', id: 4, pattern: [0, 3, 6, 10] },
    { name: 'Diminished 7', id: 5, pattern: [0, 3, 6, 9] }
  ]);

  const [filteredChords, setFilteredChords] = useState([]);
  const [currentChord, setCurrentChord] = useState({ name: 'Major', id: 0, pattern: [0, 4, 7], chord: [0, 4, 7] });
  const [hiddenNote, setHiddenNote] = useState('');

  const reloadHandler = () => {
    window.location.reload()
  }

  
  const onFilterClick = (chord) => { // not working properly
  // filter "filteredChords" and see if the chord is already inside state
  // if it is, remove it from the state ::: if not, add it to the state
    let chordIndex = filteredChords.includes(chord);

    if(chordIndex) {
      // deep copy of state, so its not the same in memory
      // when it updates the state
      let filterList = JSON.parse(JSON.stringify(filteredChords))
                                      .slice()
                                      .filter(item => item.id !== chord.id)
      setFilteredChords(filterList)
    } else {
      setFilteredChords(filteredChords => [...filteredChords, chord]);
    } //console.log(filteredChords)
  }

  const random = (length) => {
    return Math.floor(Math.random() * length)
  }
 
  const generateCurrent = () => {
    // make deep copy of the chord object
    // so the UI will update if the same chord
    // comes again (cause its the same in memory)
    let chordState = JSON.parse(JSON.stringify(filteredChords));

    let chordCopy = chordState.slice(random(filteredChords.length)).shift();
    // choose a random root note !!!!
    let rootNote = notes.slice(random(12))
    let finChord = [];
    // convert to self executing function
    const createChord = () => {
      // map over chord pattern to match the pattern number with
      // the matching note. 0-3-7 => C-E-G
      // chord => chord.OBJ => setCurrentChord
      chordCopy.pattern.map(index => {
        return finChord.push(rootNote[index])
      })
    }
    createChord()
    // append chord array to chordCopy object and setState
    chordCopy['chord'] = finChord;
    setCurrentChord(chordCopy)
    console.log("test")
    console.log(currentChord)
  }


 const hideTheNote = () => {
    // input element gets stored instead of the random note, and the note gets saved in state
    const input = <input />;
    let currentCopy = JSON.parse(JSON.stringify(currentChord));
    const randomIndex = random(currentChord.chord.length <= 4 ? 3 : 4);    
    let randomNote = currentCopy.chord.splice(randomIndex, 1, input);
   
    console.log(randomNote)
    console.log(currentCopy)
    setHiddenNote(randomNote)
    setCurrentChord(currentCopy)
    
  }
 // add option "with # or without"
 // add score (try´s without failure)

  return (
    <Container className="App">
      <Header reload={reloadHandler}/>
      <FilterBox 
        chords={chords}
        onClickHandler={onFilterClick}
      />
      <Button 
        variant="primary"
        onClick={generateCurrent}
      >
        generate Chord
      </Button>
      <Button variant="secondary" onClick={hideTheNote}>Quiz</Button>
      <ChordBox currentChord={currentChord}/>
    </Container>
  );
}

export default App;
