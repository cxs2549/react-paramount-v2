import { Fragment } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home'
import Footer from './components/Footer/Footer'

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<main>
				<Home />
			</main>
			<Footer />
		</Fragment>
	)
}

export default App
