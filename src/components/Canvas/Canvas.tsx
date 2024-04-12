import { forwardRef, memo, useEffect, useState } from 'react'
import {
	PreviewWrapper,
	CanvasWrapper,
	Loader,
} from './styles'


export const Canvas = memo(forwardRef<HTMLCanvasElement>((_, ref) => {
	const [resolution, setResolution] = useState<number>(512)

	useEffect(() => {
		const { devicePixelRatio } = window
		setResolution(512 * Math.min(devicePixelRatio, 2))
	}, [])

	return (
		<PreviewWrapper>
			<CanvasWrapper>
				<Loader />

				<canvas
					width={ resolution }
					height={ resolution }
					ref={ ref }
				/>
			</CanvasWrapper>
		</PreviewWrapper>
	)
}))
