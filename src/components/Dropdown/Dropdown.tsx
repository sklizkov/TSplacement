import { FC, ReactNode, useState, cloneElement, ReactElement, useRef, CSSProperties } from 'react'
import {
	DropdownWrapper,
	StyledDropdown,
} from './styles'
import { useClickOutside } from '@/hooks'


interface DropdownProps {
	children: ReactNode
	trigger: ReactElement
	style?: CSSProperties
	left?: boolean;
}

export const Dropdown: FC<DropdownProps> = ({
	children,
	trigger,
	left,
	style,
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const [active, setActive] = useState<boolean>(false)

	useClickOutside(ref, () => setActive(false))

	const toggleHandler = (val?: boolean) => {
		if (val !== undefined) {
			setActive(val)
		} else {
			setActive(prev => !prev)
		}
	}

	return (
		<DropdownWrapper ref={ ref } style={ style }>
			{ cloneElement(trigger, {
				onClick: () => toggleHandler(),
				active: active,
			}) }

			{ active && (
				<StyledDropdown
					$left={ !!left }
					onClick={ () => toggleHandler(false) }
				>
					{ children }
				</StyledDropdown>
			) }
		</DropdownWrapper>
	)
}
