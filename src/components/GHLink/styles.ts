import {
	styled,
} from 'styled-components'


export const StyledGHLink = styled.a`
	display: block;
	text-decoration: none;
	background-color: var(--color-gh-bg);
	color: var(--color-gh-icon);
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	user-select: none;
	cursor: pointer;

	& > svg {
		width: 24px;
	}

	&:after {
		display: block;
		content: '';
		position: absolute;
		top: 1px;
		right: 1px;
		width: 0;
		height: 0;
		border-top: 4px solid var(--color-gh-icon);
		border-right: 4px solid var(--color-gh-icon);
		border-bottom: 4px solid transparent;
		border-left: 4px solid transparent;
		opacity: 0;
	}

	&:hover {
		&:after {
			opacity: 1;
		}
	}
`