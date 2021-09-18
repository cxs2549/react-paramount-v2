import styled from 'styled-components'
const StyledSidebar = styled.div`
    width: 190px;
    max-width: 200px;
    min-width: 200px;
    height: 800px;
    /* background-color: red; */
    /* position: absolute; */
    /* top: 0; */
    /* left: 0; */
`
const Sidebar = () => {
return (
<StyledSidebar className="hidden md:block bg-blue-700">

</StyledSidebar>
)
}
export default Sidebar