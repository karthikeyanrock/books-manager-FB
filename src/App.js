import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBook from './components/CreateBook';
import UpdateBookInfo from './components/UpdateBookInfo';
import ShowBookDetails from './components/ShowBookDetails';
import ShowBookList from './components/ShowBookList'
import SearchAppBar from './Navibar';
import { useState, createContext } from 'react';
import Demo from './Demo';
import SignIn from './SignIn';
import SignUp from './SignUp';

export const MainContext = createContext()

function App() {
  const [searched, setSearched] = useState("")
  const [filteredList, setFilteredList] = useState([]);
  const [books, setBooks] = useState([]);
  const [user,setUser] = useState("")


  return (
    <MainContext.Provider value={{searched,setSearched, filteredList, setFilteredList, books, setBooks, user,setUser}}>
      <div className="App">
        <SearchAppBar />
        <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<ShowBookList />} />
            <Route path='/create-book' element={<CreateBook />} />
            <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
            <Route path='/show-book/:id' element={<ShowBookDetails />} />
            <Route path='/demo' element={<Demo />} />
            <Route path='/demo' element={<Demo />} />
            
          </Routes>
        </div>
      </Router>
      </div>
    </MainContext.Provider>
  );
}

export default App;
