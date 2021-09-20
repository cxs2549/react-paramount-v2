import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home'
import Footer from './components/Footer/Footer'
import styled from 'styled-components'

const StyledApp = styled.div`
	display: grid;
	@media (min-width: 992px) {
		grid-template-columns: 196px 1fr;
		grid-template-rows: 100vh 200px;
	}
`

const App = () => {
	return (
		<StyledApp id="app" className="text-black">
			<Navbar />

			<Home />

			<Footer />
		</StyledApp>
	)
}

export default App
