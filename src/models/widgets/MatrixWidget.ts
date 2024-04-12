import { v4 as uuidv4 } from 'uuid'
import { Widgets, WidgetValueTypes, IMatrix } from '@/types'
import { randomInt } from '@/utils/math'


export class MatrixWidget {
	type: Widgets =  Widgets.Matrix

	// constructor() {}

	getInitialProps(opt: Partial<IMatrix> = {}): IMatrix {
		return {
			id: uuidv4(),
			type: this.type,
			disabled: false,
			shapes: {
				square: true,
				strokeSquare: false,
				circle: false,
				strokeCircle: false,
				rhombus: false,
				strokeRhombus: false,
			},
			brightness: [0, 255],
			amount: [2, 5],
			scale: [50, 200],
			spacing: [80, 180],
			chance: 90,
			...opt
		}
	}

	getUiSettings() {
		return {
			shapes: { type: WidgetValueTypes.checkboxes, items: [
				'square', 'strokeSquare',
				'circle', 'strokeCircle',
				'rhombus', 'strokeRhombus',
			] },
			brightness: { type: WidgetValueTypes.range, min: 0, max: 255 },
			amount: { type: WidgetValueTypes.range, min: 1, max: 10 },
			scale: { type: WidgetValueTypes.range, min: 50, max: 400, step: 10, after: '%' },
			spacing: { type: WidgetValueTypes.range, min: 10, max: 900, step: 10, after: '%' },
			chance: { type: WidgetValueTypes.range, min: 10, max: 100, step: 10, after: '%' },
		}
	}

	static render(ctx: CanvasRenderingContext2D, props: IMatrix) {
		const { width, height } = ctx.canvas

		const shapes = Object.entries(props.shapes).filter(s => s[1]).map(o => o[0])
		const brightness = randomInt(props.brightness[0], props.brightness[1])
		const amountx = randomInt(props.amount[0], props.amount[1])
		const amounty = randomInt(props.amount[0], props.amount[1])
		const scale = randomInt(props.scale[0], props.scale[1]) / 100
		const spacing = randomInt(props.spacing[0], props.spacing[1]) / 100
		const chance = props.chance

		const shape = shapes[randomInt(0, shapes.length - 1)]

		const size = Number.parseInt(`${ (width / 256) * scale }`)
		const gap = Number.parseInt(`${ size * spacing }`)
		const sizex = (size * amountx) + (gap * (amountx - 1))
		const sizey = (size * amounty) + (gap * (amounty - 1))

		let posx = randomInt(0, width + sizex) - sizex
		let posy = randomInt(0, height + sizey) - sizey

		ctx.fillStyle = `rgb(${ brightness }, ${ brightness }, ${ brightness })`
		ctx.strokeStyle = `rgb(${ brightness }, ${ brightness }, ${ brightness })`
		ctx.lineWidth = randomInt(1, 5) * 2

		const pb = posx
		for (let y = 0; y < amounty; y++) {
			for (let x = 0; x < amountx; x++) {
				if (randomInt(0, 100) < chance) {
					MatrixWidget.drawShape(ctx, shape, posx, posy, size)
				}

				posx = posx + size + gap
			}
			posy = posy + size + gap
			posx = pb
		}
	}

	
	static drawShape(
		ctx: CanvasRenderingContext2D,
		type: string,
		posx: number,
		posy: number,
		size: number
	) {
		switch(type) {
			case 'square':
				ctx.fillRect(posx, posy, size, size)
				break

			case 'strokeSquare':
				ctx.strokeRect(posx + .5, posy + 5, size, size)
				break

			case 'circle':
				ctx.beginPath()
				ctx.arc(
					posx + size / 2 + .5, // x
					posy + size / 2 + .5, // y
					size / 2,        // radius
					0, Math.PI * 2
				)
				ctx.closePath()
				ctx.fill()
				break

			case 'strokeCircle':
				ctx.beginPath()
				ctx.arc(
					posx + size / 2, // x
					posy + size / 2, // y
					size / 2,        // radius
					0, Math.PI * 2
				)
				ctx.closePath()
				ctx.stroke()
				break

			case 'rhombus':
				ctx.beginPath()
				ctx.moveTo(
					posx + size / 2,
					posy
				)
				ctx.lineTo(
					posx + size,
					posy + size / 2
				)
				ctx.lineTo(
					posx + size / 2,
					posy + size
				)
				ctx.lineTo(
					posx,
					posy + size / 2
				)
				ctx.closePath()
				ctx.fill()
				break

			case 'strokeRhombus':
				ctx.beginPath()
				ctx.moveTo(
					posx + size / 2,
					posy
				)
				ctx.lineTo(
					posx + size,
					posy + size / 2
				)
				ctx.lineTo(
					posx + size / 2,
					posy + size
				)
				ctx.lineTo(
					posx,
					posy + size / 2
				)
				ctx.closePath()
				ctx.stroke()
				break

			default:
				//
		}
	}

}