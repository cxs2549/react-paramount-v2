import Navbar from './components/Navbar/Wrapper/Navbar'
import Home from './views/Home/Home'
import Footer from './components/Footer/Footer'
import styled from 'styled-components'

const StyledApp = styled.div`
	/* max-width: 72rem; */
	/* position: relative; */
	/* margin: 0 auto; */
	display: grid;
	@media (min-width: 992px) {
		grid-template-columns: 196px 1fr;
		grid-template-rows: 600px 200px;
	}
`

const App = () => {
	return (
		<StyledApp className="text-black">
			<Navbar />

			<Home />

			<Footer />
		</StyledApp>
	)
}

export default App
