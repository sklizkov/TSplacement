import {
	styled,
} from 'styled-components'


export const PropertiesWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
  /* background-color: var(--color-gray-800); */
`

export const PropContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	/* margin: 8px; */
	/* border-top: 4px solid var(--color-background); */
	/* background-color: var(--color-header); */
	padding: 8px;
	/* background-color: green; */
	/* border: 1px dotted var(--color-input-border); */
  /* background-color: green; */
  background-color: var(--color-widget-background);
  border-top: 4px solid var(--color-background);
`

export const ControllBar = styled.div`
	background-color: var(--color-header);
	padding: 4px;
	/* border-radius: 4px 4px 0 0; */
	/* margin-top: 2px; */
	display: flex;
`

export const WidgetsWrapper = styled.div`
  background-color: var(--color-gray-800);
  padding: 1px;
`
