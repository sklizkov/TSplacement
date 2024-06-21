import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {}

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
	}

	body {
		-webkit-font-smoothing: antialiased;
		margin: 0;
	}
`;
