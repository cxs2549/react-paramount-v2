import { useState, useRef } from 'react'
import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import Menu from './Menu/Menu'
import useOnClickOutside from 'use-onclickoutside'
import Overlay from './Overlay/Overlay'

const StyledBurger = styled.div``

const BurgerMenu = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const handleOpen = () => {
		setIsOpen(!isOpen)
		document.body.classList.toggle('freeze-flow')
	}
	const handleClose = () => {
		setIsOpen(false)
		document.body.classList.remove('freeze-flow')
	}

	const menuRef = useRef()
	useOnClickOutside(menuRef, handleClose)
	return (
		<StyledBurger ref={menuRef} className="md:hidden">
			<Hamburger toggled={isOpen} toggle={handleOpen} />
			<Menu open={isOpen} />
			{isOpen && <Overlay close={handleClose} /> }
			
		</StyledBurger>
	)
}
export default BurgerMenu
