import { FC, ReactNode, CSSProperties } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

import {
	PaneWrapper,
	PaneHeader,
	PaneFooter,
	PaneContent,
} from './styles'


interface PaneProps {
	children?: ReactNode
	header?: ReactNode
	footer?: ReactNode
	style?: CSSProperties
}

export const Pane: FC<PaneProps> = ({
	children,
	header,
	footer,
	style,
}) => {

	return (
		<PaneWrapper
			style={ style }
		>
			{ header && <PaneHeader>{ header }</PaneHeader> }

			{ children && <PaneContent>
				<Scrollbars
					renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
					renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
				>{ children }</Scrollbars>
			</PaneContent> }

			{ footer && <PaneFooter>{ footer }</PaneFooter> }
		</PaneWrapper>
	)
}
