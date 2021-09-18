import styled from 'styled-components'
const StyledMenu = styled.div`
    position: fixed;
    top: 80px;
    right: ${props => (props.open ? '0' : '-100%')};
    transition: right 500ms;
    width: 90%;
    height: calc(100vh - 80px);
`
const Menu = ({open}) => {
return (
<StyledMenu open={open} className="bg-red-300">

</StyledMenu>
)
}
export default Menu