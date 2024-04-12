import { FC, useEffect, useState, useRef } from 'react'
import { useDrag } from '@use-gesture/react'
import { GradientView } from './'
import { Thumb } from './Thumb'
import {
	GradientWrapper,
} from './styles'
import { IColor } from '@/types'


interface GradientProps {
	colors: IColor[]
	active: IColor['id']
	onChange: (id: IColor['id'], val: IColor['stop']) => void
	onActive: (id: IColor['id']) => void
}

export const Gradient: FC<GradientProps> = ({
	colors,
	active,
	onChange,
	onActive,
}) => {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const [cssGradient, setCssGradient] = useState<string>('linear-gradient(to right, black, white)')

	useEffect(() => {
		const cssProps: string[] = [ ...colors ]
			.sort((a: IColor, b: IColor) => a.stop! - b.stop!)
			.map((color: IColor) => {
				return ` #${ color.code! } ${ Number.parseInt(`${ color.stop! * 100 }`) }%`
			})

		setCssGradient(`linear-gradient(to right,${ cssProps.join(',') })`)
	}, [ colors ])
	
	const bind = useDrag(({ args, initial, movement }) => {
		const id = args[0]
		
		if (!wrapperRef.current) return

		const rect = wrapperRef.current.getBoundingClientRect()
		const from = rect.x, width = rect.width // , to = rect.x + rect.width
		const initialX = initial[0] - from

		let stop = (initialX + movement[0])
		stop = +(stop / width).toFixed(2)
		stop = Math.max(0, Math.min(stop, 1))

		onActive(id)
		onChange(id, stop)
	})

	return (
		<GradientWrapper
			ref={ wrapperRef }
		>
			<GradientView
				height={ 32 }
				style={ {background: cssGradient} }
			/>
			
			{ (
				colors.map((color: IColor) => (
					<Thumb
						key={ color.id }
						{ ...color }
						{ ...bind(color.id) }
						active={ active === color.id }
					/>
				))
			) }
		</GradientWrapper>
	)
}
