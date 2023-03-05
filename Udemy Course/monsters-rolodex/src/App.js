import { useState, useEffect } from 'react';

import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const arr = [0, 4, 7];
  const newArr = [];
  const pattern = arr.map( note => {
    return newArr.push(note);
  })
  console.log(pattern);

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  

  useEffect(() => {
  
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users));
  }, []);
 
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox 
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />
      {<CardList monsters={filteredMonsters} />}
    </div>
  )
}

/*
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // AFTER the component first renders, then this function 
  // is called, who updates the state with 
  // the original list
 
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        }
      ))
  }

  // on change of the input field, the state is updated
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    // getting sure input and state are lowercase with locale exceptions
    //the value of the search field updates the 
    //searchField in state
    this.setState(() => {
      return { searchField };
    })
  }

  render() { 
    // the state is extracted through variables
    // so "this" dont have to be used
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox 
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
    );
  }
}
*/

export default App;



