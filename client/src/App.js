import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './signup'
import Navbar from './navbar'
import Home from './home'
import Login from './login'
import Detect from './detect'
import Upload from './upload'

const App = () => {
  return <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/detect">
          <Detect />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
      </Switch>
    </Router>
  </>
}

export default App