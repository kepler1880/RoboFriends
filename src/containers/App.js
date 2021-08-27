import React , {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
//import {robots} from './robots';
import ErrorBoundry from '../components/ErrorBoundry';


function App (){
    const [robots , setRobots] =useState([])
    const [searchfield , setSearchField] = useState('')
    const [count , setCount] = useState(0)

//extends Component {
//    constructor(){
//         super()
//         this.state= {
//             robots: [],
//             searchfield: ''
//         }
//     }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //       .then(response=> response.json())
    //       .then(users => {this.setState({ robots: users})});
    //   }

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=> response.json())
         .then(users => {setRobots(users)});
        // console.log(robots, searchfield)
        console.log(count);
    }, [count])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)  
       // console.log(event.target.value)  
    }
    //render(){
        const filteredRobots = robots.filter(robot =>{
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
    if(!robots.length){
        return <h1> Loading !!! </h1>
    }else{
        return (
            <div className='tc'>
                <h1 className='f1'> RoboFriends</h1>
                <button onClick = {() => setCount(count + 1 )}> Click Me !!</button>
                <SearchBox searchChange = {onSearchChange} />              
                <Scroll>
                   <ErrorBoundry>
                   <CardList robots = {filteredRobots}/>  
                    </ErrorBoundry>                 
                </Scroll>                
            </div>        
            );
        } 
    }

export default App;