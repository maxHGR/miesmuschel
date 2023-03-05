import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './chord-box.styles.css' ;

export const ChordBox = ({ currentChord }) => {
    
  return (
    <Container  >
      <Card className='noteHeader'>
        { currentChord.name }
      </Card>
      <div className='chordBoxComponent'>
      {
          currentChord.chord.map(note => {
              return (
                // when same chord is generated again
                // it does not update, because it copys from the 
                // same chord object (+add 1 key/value)
                // so it´s same in memory
                  <Card key={currentChord.chord.indexOf(note)} className='noteBoxComponent'>
                      {note}
                  </Card>
              )
          })
      }
      </div>
      
    </Container>
  )
}
