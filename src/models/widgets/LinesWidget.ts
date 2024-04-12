import { v4 as uuidv4 } from 'uuid'
import { Widgets, WidgetValueTypes, ILines } from '@/types'
import { randomInt } from '@/utils/math'


export class LinesWidget {
	type: Widgets =  Widgets.Lines

	// constructor() {}

	getInitialProps(opt: Partial<ILines> = {}): ILines {
		return {
			id: uuidv4(),
			type: this.type,
			disabled: false,
			brightness: [0, 128],
			lineWidth: 10,
			...opt
		}
	}

	getUiSettings() {
		return {
			brightness: { type: WidgetValueTypes.range, min: 0, max: 255 },
			lineWidth: { type: WidgetValueTypes.range, min: 1, max: 50, after: 'px' },
		}
	}

	static render(ctx: CanvasRenderingContext2D, props: ILines) {
		const { width, height } = ctx.canvas

		const brightness = randomInt(props.brightness[0], props.brightness[1])
		const linewidth = props.lineWidth

		const offset = (linewidth & 1) === 1 ? 0 : .5
		const resolution = width + offset
		let posx = randomInt(0, width + linewidth) - linewidth + offset
		let posy = randomInt(0, height + linewidth) - linewidth + offset

		const gridx = randomInt(2, 5)
		const lines = randomInt(1, 15)
		const step = 50

		ctx.lineWidth = linewidth
		ctx.strokeStyle = `rgb(${ brightness }, ${ brightness }, ${ brightness })`

		if (posx >= posy) {
			ctx.beginPath()
			ctx.moveTo(posx, posy)
			ctx.lineTo(resolution, posy)

			for (let x = 0; x < gridx; x++) {
				ctx.moveTo(posx, posy)

				randomInt(1, 2) === 1 ? ctx.lineTo(posx, offset) : ctx.lineTo(posx, resolution)

				posx += step * lines
			}
		} else {
			ctx.beginPath()
			ctx.moveTo(posx, posy)
			ctx.lineTo(offset, posy)

			for (let x = 0; x < gridx; x++) {
				ctx.moveTo(posx, posy)

				randomInt(1, 2) === 1 ? ctx.lineTo(offset, posy) : ctx.lineTo(resolution, posy)

				posy += step * lines
			}
		}

		ctx.stroke()
	}

}
