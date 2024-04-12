import {
	styled,
	keyframes,
} from 'styled-components'


export const PreviewWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background-image: url('./img/tiles.png');
	background-repeat: repeat;
	background-position: center center;
	background-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const CanvasWrapper = styled.div`
	position: relative;
	background-color: var(--color-background);
	width: 100%;
	max-width: 512px;
	min-width: 256px;
	margin: 64px;
	box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
							rgba(0, 0, 0, 0.07) 0px 2px 4px,
							rgba(0, 0, 0, 0.07) 0px 4px 8px,
							rgba(0, 0, 0, 0.07) 0px 8px 16px,
							rgba(0, 0, 0, 0.07) 0px 16px 32px,
							rgba(0, 0, 0, 0.07) 0px 32px 64px;
	
	&:before {
		content: '';
		float: left;
		padding-top: 100%;
	}
	
	& > canvas {
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`

const loaderAnimation = keyframes`
	0% { background-image: linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0); }
	25% { background-image: linear-gradient(var(--color-gray-0) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0); }
	50% { background-image: linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(var(--color-gray-0) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0); }
	75% { background-image: linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(var(--color-gray-0) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0); }
	100% { background-image: linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0), linear-gradient(var(--color-gray-0) 20px, transparent 0); }
`

export const Loader = styled.div`
	position: absolute;
	z-index: 1;
	top: 50%;
	left: 50%;
	transform-origin: 50% 50%;
	transform: translate(-50%, -50%) scale(.5);

	height: 20px;
	width: 140px;
	background-image: 
		linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0),
		linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0),
		linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0),
		linear-gradient(rgba(255, 255, 255, .2) 20px, transparent 0);
	background-repeat: no-repeat;
	background-size: 20px auto;
	background-position: 0 0, 40px 0, 80px 0, 120px 0;
	animation: ${ loaderAnimation } 1s linear infinite;
`

