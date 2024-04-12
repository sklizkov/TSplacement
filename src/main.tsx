import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyles } from './styles'

import '@/svcs/i18n'


const $root = document.getElementById('root')!

ReactDOM.createRoot($root).render(
	<React.StrictMode>
		<>
			<GlobalStyles />
			<App />
		</>
	</React.StrictMode>,
)
