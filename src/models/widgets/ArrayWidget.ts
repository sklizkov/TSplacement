import { v4 as uuidv4 } from 'uuid'
import { Widgets, WidgetValueTypes, IArray } from '@/types'
import { randomInt } from '@/utils/math'


export class ArrayWidget {
	type: Widgets =  Widgets.Array

	// constructor() {}

	getInitialProps(opt: Partial<IArray> = {}): IArray {
		return {
			id: uuidv4(),
			type: this.type,
			disabled: false,
			brightness: [0, 255],
			amount: [2, 5],
			scale: [50, 120],
			spacing: [50, 200],
			...opt
		}
	}

	getUiSettings() {
		return {
			brightness: { type: WidgetValueTypes.range, min: 0, max: 255 },
			amount: { type: WidgetValueTypes.range, min: 1, max: 10 },
			scale: { type: WidgetValueTypes.range, min: 50, max: 200, step: 10, after: '%' },
			spacing: { type: WidgetValueTypes.range, min: 10, max: 900, step: 10, after: '%' },
		}
	}

	static render(ctx: CanvasRenderingContext2D, props: IArray) {
		const { width, height } = ctx.canvas

		const brightness = randomInt(props.brightness[0], props.brightness[1])
		const amount = randomInt(props.amount[0], props.amount[1])
		const scale = randomInt(props.scale[0], props.scale[1]) / 100
		const spacing = randomInt(props.spacing[0], props.spacing[1]) / 100

		const size = Number.parseInt(`${ (width / 128) * scale }`)
		const gap = Number.parseInt(`${ size * spacing }`)
		const len = Number.parseInt(`${ size * randomInt(5, 20) * scale }`)

		const dir = randomInt(0, 100) > 50

		let sizex, sizey
		if (dir) { // |||
			sizex = (size * amount) + (gap * (amount - 1))
			sizey = len
		} else { // ===
			sizex = len
			sizey = (size * amount) + (gap * (amount - 1))
		}

		let posx = randomInt(0, width + sizex) - sizex
		let posy = randomInt(0, height + sizey) - sizey

		ctx.fillStyle = `rgb(${ brightness }, ${ brightness }, ${ brightness })`

		for (let i = 0; i < amount; i++) {
			if (dir) {
				ctx.fillRect(posx, posy, size, len)
				posx = posx + size + gap
			} else {
				ctx.fillRect(posx, posy, len, size)
				posy = posy + size + gap
			}
		}
	}

}