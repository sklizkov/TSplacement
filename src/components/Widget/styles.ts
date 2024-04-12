import {
	styled,
} from 'styled-components'


export const WidgetWrapper = styled.div`
	background-color: var(--color-widget-background);
	margin: 4px;
`

export const WidgetHeader = styled.header`
	background-color: var(--color-secondary);
	display: flex;
	align-items: center;
	gap: 2px;
`

export const WidgetContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 4px;
	border: 2px solid var(--color-secondary);
	border-top: 0;
`
