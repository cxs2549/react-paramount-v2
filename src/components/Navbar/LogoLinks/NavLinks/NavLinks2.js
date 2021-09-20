import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'

const StyledNavLinks = styled.ul`
	color: white;
	#star {
		opacity: .9;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			left: 1rem;
			top: 4px;
			width: 14px;
			height: 1px;
			background-color: #fff;
			
		}
		&::after {
			content: '';
			position: absolute;
			right: 1rem;
			top: 4px;
			width: 14px;
			height: 1px;
			background-color: #fff;
			@media (min-width: 1024px) {
			}
		}
	}
	svg {
		font-size: .65rem !important;
	}
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 44px;
		width: 100%;
		border-radius: 12px;
		cursor: pointer;
		&:hover {
			color: #1d48e5;
			background-color: #fff;
		}
	}
`
const NavLinks = ({ links }) => {
	return (
		<StyledNavLinks className="hidden lg:flex lg:justify-center  w-full text-white">
			{links.map((link, i) => (
				<li
					key={i}
					className="uppercase font-medium px-4 whitespace-nowrap flex items-center gap-8 "
				>
					<span className="w-full">{link.name}</span>
					{i !== 4 && (
						<div id="star">
							<AiFillStar />
						</div>
					)}
				</li>
			))}
		</StyledNavLinks>
	)
}
export default NavLinks
