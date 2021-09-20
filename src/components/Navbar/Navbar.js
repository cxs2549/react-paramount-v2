import { useEffect, useState } from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import LogoLinks from './LogoLinks/LogoLinks'
import LogoLinks2 from './LogoLinks/LogoLinks2'
import Wrapper from './Wrapper/Wrapper'
import Wrapper2 from './Wrapper/Wrapper2'
import { CSSTransition } from 'react-transition-group'

const StyledNavbar = styled.header`
	height: auto;
	position: relative;
	z-index: 10;
	background-image: var(--brandBlue);
	@media (min-width: 992px) {
		height: 100vh;
	}
`
const StyledNavbar2 = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	height: 80px;
	background-image: var(--brandBlue);
	width: 100%;
`
const Navbar = () => {
	const [ isLg, setIsLg ] = useState(false)
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 992) return setIsLg(true)
			setIsLg(false)
		})
	})

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 2000) {
				setInProp(true)
			} else {
				setInProp(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
	})
	const [ inProp, setInProp ] = useState(false)

	return (
		<div id="header">
			<Headroom disable={isLg}>
				<StyledNavbar>
					<Wrapper>
						<LogoLinks />
						<BurgerMenu />
					</Wrapper>
				</StyledNavbar>
			</Headroom>
			<CSSTransition
				in={inProp}
				timeout={200}
				classNames="my-node"
				onEnter={() => setInProp(true)}
				onExited={() => setInProp(false)}
			>
				<StyledNavbar2>
					<Wrapper2>
						<LogoLinks2 />
						<BurgerMenu />
					</Wrapper2>
				</StyledNavbar2>
			</CSSTransition>
		</div>
	)
}
export default Navbar
