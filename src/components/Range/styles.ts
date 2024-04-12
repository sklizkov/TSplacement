import { styled, css } from 'styled-components'


export const RangeWrapper = styled.div`
	display: flex;
	gap: 2px;
	/* flex: 1; // ??? */
	width: 100%;
`

export const SliderWrapper = styled.div`
	position: relative;
	width: 100%;
	flex: none;
	background-color: var(--color-input-background);
`

export const InputWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

const StyledTrackMixin = css`
	appearance: none;
	background-color: transparent;
	border: transparent;
`

const StyledThumbMixin = css`
	appearance: none;
	background-color: transparent;
	border: 0 none;
	pointer-events: all;
	width: 3px;
	/* height: 100%; */
	height: 32px;
	border-radius: 0px;
	cursor: col-resize;
	/* background-color: red; */
	/* opacity: .2; */
`

export const StyledInput = styled.input`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	appearance: none;
	opacity: 0;
	z-index: 3;
	padding: 0;
	margin: 0;
	/* opacity: .25; */

	&:nth-child(2) {
		left: 5px;
	}
	
	&::-ms-track {
		${ () => StyledTrackMixin }
	}
	
  &::-moz-range-track {
		${ () => StyledTrackMixin }
	}
	
  &:focus::-webkit-slider-runnable-track {
		${ () => StyledTrackMixin }
	}
	
  &::-ms-thumb {
		${ () => StyledThumbMixin }
	}
	
  &::-moz-range-thumb {
		${ () => StyledThumbMixin }
	}
	
  &::-webkit-slider-thumb {
		${ () => StyledThumbMixin }
	}
`

export const CustomInputWrapper = styled.div`
	position: relative;
	width: calc(100% - 3px); //
	height: 32px;
	/* background-color: red; */
`

export const StyledTrack = styled.div`
	position: absolute;
	top: 50%;
	width: 3px;
	height: 100%;
	transform: translate3d(0, -50%, 0);
	background-color: var(--color-text);
	z-index: 2;
`

export const StyledThumb = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	height: 100%;
	transform: translateY(-50%);
`

export const StyledThumbFill = styled.div`
	position: absolute;
	height: 100%;
	background-color: var(--color-text-dark);
	/* background-color: green; */
	opacity: 0.25;
`