import { FC, ReactNode } from 'react'
import {
	StyledPanel,
} from './styles'


interface PanelProps {
	children: ReactNode
	size?: number | string
}

export const Panel: FC<PanelProps> = ({
	children,
	size,
}) => {
	return (
		<StyledPanel
			$size={ size }
		>
			{ children }
		</StyledPanel>
	)
}
