import { v4 as uuidv4 } from 'uuid'
import { IColor } from '@/types'
import { randomInt } from '@/utils/math'
import { randomHexColor } from '@/utils/color'
import presets from './gradients.json'


export class Colorizer {

	static getColor(opt: Partial<IColor> = {}): IColor {
		return {
			id: uuidv4(),
			code: randomHexColor(),
			stop: randomInt(0, 100) / 100,
			...opt
		}
	}
	
	static getInitialGradient(): IColor[] {
		return presets[0].map(color => {
			return this.getColor(color)
		})
	}
	
	static getColorMap(gradient: IColor[]): ImageData | null {
		const $map = document.createElement('canvas')
		$map.width = 256
		$map.height = 1
		const mapContext = $map.getContext('2d', { alpha: false })
		if (!mapContext) return null

		const mapFill = mapContext.createLinearGradient(0, 0, $map.width, $map.height)
		for (const color of gradient) mapFill.addColorStop(color.stop!, '#' + color.code)

		mapContext.fillStyle = mapFill
		mapContext.fillRect(0, 0, $map.width, $map.height)
		
		return mapContext.getImageData(0, 0, $map.width, $map.height)
	}
	
	static _getColorMap(gradient: IColor[]): ImageData | null {
		const $map = new OffscreenCanvas(256, 1)
		const mapContext = $map.getContext('2d', { alpha: false })
		if (!mapContext) return null

		const mapFill = mapContext.createLinearGradient(0, 0, $map.width, $map.height)
		for (const color of gradient) mapFill.addColorStop(color.stop!, '#' + color.code)

		mapContext.fillStyle = mapFill
		mapContext.fillRect(0, 0, $map.width, $map.height)
		
		return mapContext.getImageData(0, 0, $map.width, $map.height)
	}

}