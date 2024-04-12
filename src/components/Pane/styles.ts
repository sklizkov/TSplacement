import { styled } from 'styled-components'


export const PaneWrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
	background-color: var(--color-background);
`

export const PaneHeader = styled.header`
	flex: none;
	background-color: var(--color-background);
`

export const PaneFooter = styled.footer`
	flex: none;
	background-color: var(--color-background);
`

export const PaneContent = styled.section`
	height: 100%;
	overflow: auto;

	.thumb-horizontal,
	.thumb-vertical {
		background-color: var(--color-scroll-thumb);
		opacity: .2;
	}
`