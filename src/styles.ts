import {
	createGlobalStyle,
	styled,
} from 'styled-components'


export const GlobalStyles = createGlobalStyle`
	:root {
		// Font
		--font-family: "Fira Sans", sans-serif;
		--font-family-mono: "Fira Mono", monospace;

		--font-size: 14px;
		--line-height: 1.5;

		--font-size-mono: 12px;
		--line-height-mono: 1.5;

		// Palette
		--color-gray-1000: #000000;
		--color-gray-900: #101217;
		--color-gray-800: #15171c;
		--color-gray-700: #1a1b20;
		--color-gray-600: #23252a;
		--color-gray-500: #36383c;
		--color-gray-400: #707174;
		--color-gray-300: #9fa0a2;
		--color-gray-200: #cfd0d1;
		--color-gray-150: #E2E3E4;
		--color-gray-100: #e7e7e8;
		--color-gray-50: #f5f6f6;
		--color-gray-0: #ffffff;

		--color-primary: #0053dc;
		--color-primary-light: #006ee8;
		--color-primary-dark: #004ecf;
		--color-primary-transparent: rgba(0, 78, 207, .25);
		--color-primary-transparent-light: rgba(0, 78, 207, .35);
		--color-primary-transparent-dark: rgba(0, 78, 207, .15);

		--color-success: #00c783;
		--color-success-light: #00d58c;
		--color-success-dark: #04b97c;
		--color-success-transparent: rgba(4, 185, 124, .25);
		--color-success-transparent-light: rgba(4, 185, 124, .35);
		--color-success-transparent-dark: rgba(4, 185, 124, .15);

		--color-error: #FF6347;
		--color-error-light: #FC8974;
		--color-error-dark: #8D3F34;
		--color-error-transparent: rgba(255, 99, 71, .25);
		--color-error-transparent-light: rgba(255, 99, 71, .35);
		--color-error-transparent-dark: rgba(255, 99, 71, .15);

		--color-warning: #FFD700;
		--color-warning-light: #FCDF3F;
		--color-warning-dark: #8D7910;
		--color-warning-transparent: rgba(255, 215, 0, .25);
		--color-warning-transparent-light: rgba(255, 215, 0, .35);
		--color-warning-transparent-dark: rgba(255, 215, 0, .15);

		--color-gh: #24292f;

    --color-secondary: var(--color-gray-600);
    --color-secondary-light: var(--color-gray-500);
    --color-secondary-dark: var(--color-gray-800);
    --color-secondary-transparent: rgba(35, 37, 42, .25);
    --color-secondary-transparent-light: rgba(35, 37, 42, .35);
    --color-secondary-transparent-dark: rgba(35, 37, 42, .15);

    --color-background: var(--color-gray-700);
    --color-text: var(--color-gray-100);
    --color-text-button: var(--color-gray-100);
    --color-text-dark: var(--color-gray-400);

    --color-header: var(--color-gray-900);
    --color-footer: var(--color-gray-900);

    --color-gh-bg: var(--color-gray-0);
    --color-gh-icon: var(--color-gh);

    --color-label-text: var(--color-text-dark);
    --color-input-background: var(--color-gray-600);
    --color-input-border: var(--color-gray-500);

    --color-widget-background: var(--color-gray-800);

    --color-scroll-thumb: var(--color-gray-400);
	}

	*,
	*:before,
	*:after {
		outline: 0;
		box-sizing: inherit;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		color: inherit;
	}

	html {
		box-sizing: border-box;
		-moz-text-size-adjust: none;
		-webkit-text-size-adjust: none;
		text-size-adjust: none;

		background-color: var(--color-background);
		color: var(--color-text);
		min-width: 800px;
	}

	body {
		-webkit-font-smoothing: antialiased;
		margin: 0;

		font-family: var(--font-family);
		font-size: var(--font-size);
		line-height: var(--line-height);
	}

	img,
	picture {
		display: block;
		max-width: 100%;
	}

	canvas,
	svg {
		display: block;
	}
`

export const AppWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const StyledSection = styled.section`
	height: 100%;
	min-height: 0;
`
