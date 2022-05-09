import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Home from './components/Home';
import DetailCard from './components/DetailCard';
import MyRecipes from './components/MyRecipes/MyRecipes';
import Create from './components/Create';
import s from './App.module.css';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
    <div className={s.wallpaper}>
        <Route path='/' component={NavBar}/>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/recipes' component={Home}/>
        <Route exact path='/recipes/:id' component={DetailCard}/>
        <Route exact path='/myrecipes' component={MyRecipes}/>
        <Route exact path='/create' component={Create}/>
        <Route exact path ='/edit/:id' component={Edit}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;