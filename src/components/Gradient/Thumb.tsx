import { FC } from 'react'
import {
	StyledThumb,
} from './styles'
import { IColor } from '@/types'


interface Thumb {
	active?: boolean
}

export const Thumb: FC<Thumb & IColor> = ({
	// id,s
	code,
	stop,
	active,
	...props
}) => {

	return (
		<StyledThumb
			$active={ !!active }
			style={ {
				backgroundColor: `#${ code }`,
				left: `${ Number.parseInt(`${ stop! * 100 }`) }%`
			} }
			{ ...props }
		/>
	)
}
