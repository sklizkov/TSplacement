import {
	styled,
} from 'styled-components'


export const DropdownWrapper = styled.div`
	position: relative;
	width: fit-content;
	/* position: absolute;
	width: 200px;
	height: 100px;
	z-index: 9;
	bottom: 0;
	left: 0;
	transform: translateY(100%); */
`

export const StyledDropdown = styled.div<{
	$left: boolean
}>`
	background-color: var(--color-header);
	padding: 2px;
	position: absolute;
	z-index: 9;
	bottom: 0;
	transform: translateY(100%);
	${ ({ $left }) => $left ? 'right: 0;' : 'left: 0;' }
`