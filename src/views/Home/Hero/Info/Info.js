import styled from 'styled-components'
const StyledInfo = styled.div`
    /* min-height: 10vh; */
    overflow: hidden;
	position: relative;
	z-index: 10;
`
const Info = ({title, quote, author}) => {
	return (
		<StyledInfo className="py-4 pb-9 flex flex-col  justify-center border-b">
			<h1 className="whitespace-nowrap text-3xl mb-2 font-light opacity-90 uppercase text-center text-blue-800 ">
				{title}
			</h1>
			<p className="italic text-center text-xl lg:text-2xl opacity-90 text-gray-800 mb-2">
				"{quote}"
			</p>
			<span className="text-center block uppercase text-xs text-yellow-700 font-semibold opacity-90">
				{author}
			</span>
		</StyledInfo>
	)
}
export default Info
