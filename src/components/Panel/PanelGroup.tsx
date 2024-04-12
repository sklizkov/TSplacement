import { FC, ReactNode } from 'react'
import {
	StyledPanelGroup,
} from './styles'


interface PanelGroupProps {
	children: ReactNode
	direction?: 'row' | 'column'
}

export const PanelGroup: FC<PanelGroupProps> = ({
	children,
	direction,
}) => {
	return (
		<StyledPanelGroup
			$direction={ direction || 'column' }
		>
			{ children }
		</StyledPanelGroup>
	)
}
