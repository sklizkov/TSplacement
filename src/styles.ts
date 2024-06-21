import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-family: "Fira Sans", sans-serif;
    --font-size: 14px;
    --line-height: 1.5;

    --font-family-mono: "Fira Mono", monospace;
    --font-size-mono: 12px;
    --line-height-mono: 1.5;

    --color-background: #16171B;
    --color-text: #ffffff;
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
	}

	body,
	input[type="text"],
	textarea {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

	body {
		margin: 0;
		font-family: var(--font-family);
		font-size: var(--font-size);
		line-height: var(--line-height);
	}
`;
