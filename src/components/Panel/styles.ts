import {
	styled,
} from 'styled-components'


export const StyledPanelGroup = styled.div<{
	$direction: 'row' | 'column'
}>`
  display: grid;
  width: 100%;
	height: 100%;
  padding: 2px;
  grid-template-columns: auto 340px;
  grid-template-rows: auto;

`

export const StyledPanel = styled.div<{
	$size?: number | string
}>`
  width: 100%;
  height: 100%;
  overflow: hidden;

`
