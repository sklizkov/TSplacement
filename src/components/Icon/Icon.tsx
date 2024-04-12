import { FC, SVGProps } from 'react'

import RectsSvg from '@/assets/icons/rects.svg?react'
import LinesSvg from '@/assets/icons/lines.svg?react'
import TrashSvg from '@/assets/icons/trash.svg?react'
import DownloadSvg from '@/assets/icons/download.svg?react'
import MinusSvg from '@/assets/icons/minus.svg?react'
import PlusSvg from '@/assets/icons/plus.svg?react'
import ArraySvg from '@/assets/icons/array.svg?react'
import MatrixSvg from '@/assets/icons/matrix.svg?react'
import SquareSvg from '@/assets/icons/square.svg?react'
import StrokeSquareSvg from '@/assets/icons/strokeSquare.svg?react'
import CircleSvg from '@/assets/icons/circle.svg?react'
import StrokeCircleSvg from '@/assets/icons/strokeCircle.svg?react'
import RhombusSvg from '@/assets/icons/rhombus.svg?react'
import StrokeRhombusSvg from '@/assets/icons/strokeRhombus.svg?react'


interface IconProps {
	name: string
	svgProp?: SVGProps<SVGSVGElement>
}

export const Icon: FC<IconProps> = ({
	name,
	svgProp,
}) => {

	return (
		<>
			{ (name === 'rects') && <RectsSvg { ...svgProp } /> }
			{ (name === 'lines') && <LinesSvg { ...svgProp } /> }
			{ (name === 'trash') && <TrashSvg { ...svgProp } /> }
			{ (name === 'download') && <DownloadSvg { ...svgProp } /> }
			{ (name === 'minus') && <MinusSvg { ...svgProp } /> }
			{ (name === 'plus') && <PlusSvg { ...svgProp } /> }
			{ (name === 'array') && <ArraySvg { ...svgProp } /> }
			{ (name === 'matrix') && <MatrixSvg { ...svgProp } /> }
			{ (name === 'square') && <SquareSvg { ...svgProp } /> }
			{ (name === 'strokeSquare') && <StrokeSquareSvg { ...svgProp } /> }
			{ (name === 'circle') && <CircleSvg { ...svgProp } /> }
			{ (name === 'strokeCircle') && <StrokeCircleSvg { ...svgProp } /> }
			{ (name === 'rhombus') && <RhombusSvg { ...svgProp } /> }
			{ (name === 'strokeRhombus') && <StrokeRhombusSvg { ...svgProp } /> }
		</>
	)
}
