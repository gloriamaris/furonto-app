import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import AppRoutes from './pages/AppRoutes'

ReactDOM.render(<AppRoutes/>, document.getElementById('root'))
registerServiceWorker()
