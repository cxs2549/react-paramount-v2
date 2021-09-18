import styled from 'styled-components'

const StyledHero = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	@media (min-width: 992px) {

		min-height: 600px;
	}
	
	img {
		object-fit: cover;
		min-height: 100%;
		min-width: 100%;
	}
`
const Hero = ({ image, title, quote, author }) => {
	return (
		<StyledHero className="flex flex-col  relative">
			<img src={image} className="" alt="" />

			<div className="absolute top-0 right-0 hidden flex-grow  flex-col  justify-center bg-yellow-500">
				<h1 className="whitespace-nowrap text-2xl font-light opacity-90 uppercase text-center mb-3 text-blue-800 ">
					{title}
				</h1>
				<p className="italic text-center text-xl lg:text-2xl opacity-90 text-gray-800">
					"{quote}"
				</p>
				<span className="text-center block mt-2 md:mt-3 uppercase text-xs text-yellow-700 font-medium opacity-90">
					{author}
				</span>
			</div>
		</StyledHero>
	)
}
export default Hero
