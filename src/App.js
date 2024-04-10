import './App.css';
import { useState ,useEffect} from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';
const App = () => {
  const [searchstr, setSearchstr] = useState('');
  const [Monsters, setMonster] = useState([]);
  const [filterMonster,setfilterMonster]=useState(Monsters)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respone => respone.json())
    .then(user => setMonster(user))
  },[])
  const onshearch = (event) => {
    let shearchStr = event.target.value.toLowerCase();
    setSearchstr(shearchStr)
  }
  useEffect(()=>{
    const NewMonster = Monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchstr);
    });
    setfilterMonster(NewMonster);
  },[searchstr,Monsters])
  return (
    <div className="App">
      <h1 className='app-title'>The Addams Family</h1>
      <SearchBox className='monster-search-box' palceholder='Search Monster' onchangeHelper={onshearch} />
      <CardList monster={filterMonster} />
    </div>
  );
}
//class component
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       shearchStr: ''
//     }
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(respone => respone.json())
//       .then(user => this.setState(() => {
//         return { monsters: user }
//       },
//       ))
//     }
//   onshearch=(event)=>{
//     let shearchStr = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { shearchStr }
//     })
//   }
//   render() {
//     const {monsters,shearchStr}=this.state;
//     const {onshearch}=this;
//     const filterMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(shearchStr);
//     });
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodox</h1>
//         <SearchBox className='monster-search-box' palceholder='Search Monster' onchangeHelper={onshearch}/>
//         <CardList monster={filterMonster}/>
//       </div>
//     );
//   }
// }
export default App;