import { styled } from 'styled-components'


export const GradientWrapper = styled.div`
	position: relative;
`

export const StyledThumb = styled.div<{
	$active: boolean
}>`
	--offset: ${ ({ $active }) => $active ? '0px' : '2px' };

	position: absolute;
	top: var(--offset);
	bottom: var(--offset);
	left: 0;
	width: 4px;
	/* height: 32px; */
	transform: translateX(-50%);
	cursor: col-resize;
	z-index: ${ ({ $active }) => $active ? '2' : '1' };
	box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, .2);
	touch-action: none;
	
	&:before {
		display: block;
		content: '';
		position: absolute;
		top: -2px;
		bottom: -2px;
		right: -2px;
		left: -2px;
		border: 2px solid var(--color-text);
	}
`

export const StyledGradientView = styled.div<{
	$width: string | number
	$height: string | number
}>`
	display: block;
	background-color: var(--color-black);
	width: ${ ({ $width }) => typeof $width === 'number' ? $width + 'px' : $width };
	height: ${ ({ $height }) => typeof $height === 'number' ? $height + 'px' : $height };
`