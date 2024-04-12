import { v4 as uuidv4 } from 'uuid'
import { Widgets, WidgetValueTypes, IRects } from '@/types'
import { randomInt } from '@/utils/math'


export class RectsWidget {
	type: Widgets =  Widgets.Rects

	// constructor() {}

	getInitialProps(opt: Partial<IRects> = {}): IRects {
		return {
			id: uuidv4(),
			type: this.type,
			disabled: false,
			brightness: [0, 255],
			alpha: [100, 100],
			scale: [100, 200],
			...opt
		}
	}

	getUiSettings() {
		return {
			brightness: { type: WidgetValueTypes.range, min: 0, max: 255 },
			alpha: { type: WidgetValueTypes.range, min: 0, max: 100, after: '%' },
			scale: { type: WidgetValueTypes.range, min: 50, max: 200, after: '%' },
		}
	}

	static render(ctx: CanvasRenderingContext2D, props: IRects) {
		const { width, height } = ctx.canvas

		const brightness = randomInt(props.brightness[0], props.brightness[1])
		const alpha = randomInt(props.alpha[0], props.alpha[1]) / 100
		const scalex = randomInt(props.scale[0], props.scale[1]) / 100
		const scaley = randomInt(props.scale[0], props.scale[1]) / 100

		const size = width / 16
		const sizex = Number.parseInt(`${ size * scalex }`)
		const sizey = Number.parseInt(`${ size * scaley }`)

		const posx = randomInt(0, width + sizex) - sizex
		const posy = randomInt(0, height + sizey) - sizey

		ctx.fillStyle = `rgba(${ brightness }, ${ brightness }, ${ brightness }, ${ alpha })`
		ctx.fillRect(posx, posy, sizex, sizey)
	}

}