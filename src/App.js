import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
