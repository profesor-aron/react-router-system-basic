import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'

import App from './App'
import Home from './modules/Home'
import Login from './modules/Login'

render(
	<HashRouter>
		<div>
	    <Route exact path="/" component={App} />
	    <Route path="/home" component={Home} />
	    <Route path="/login" component={Login} />
    </div>
  </HashRouter>,
	document.getElementById('app')
)
