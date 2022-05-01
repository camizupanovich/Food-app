import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Home from './components/Home';
import DetailCard from './components/DetailCard';
import MyRecipes from './components/MyRecipes';
import Create from './components/Create';
import s from './App.module.css'

function App() {
  return (
    <BrowserRouter>
        <Route path='/' component={NavBar}/>
    <div className={s.wallpaper}>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/recipes' component={Home}/>
        <Route exact path='/recipes/:id' component={DetailCard}/>
        <Route exact path='/myrecipes' component={MyRecipes}/>
        <Route exact path='/create' component={Create}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;