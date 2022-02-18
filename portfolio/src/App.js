import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Nav from './components/Nav';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';



function App() {

  const [categories] = useState([
    {name: 'About'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'}
  ]);
//set current page as about on initial page load
  const[currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <main>
        <Nav 
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          categories={categories}></Nav>
        {currentCategory.name === 'Contact' ? (
          <><Contact></Contact></>
        ) :
        currentCategory.name === 'Portfolio' ? (
          <><Portfolio></Portfolio></>
        ) :
        currentCategory.name === 'Resume' ? (
          <><Resume></Resume></>
        ):
        (<About></About>)
        }
      </main>
    </div>
  );
}

export default App;
