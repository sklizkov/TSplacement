import { saveAs } from 'file-saver'
import { State } from '@/stores/rendererStore'


type WorkerModule = typeof import('./worker')

export class Renderer {
	resolution: number

	$heightCanvas: HTMLCanvasElement
	$normalCanvas: HTMLCanvasElement
	$colorCanvas: HTMLCanvasElement

	offscreen

	constructor(resolution: number = 8192) {
		this.resolution = resolution

		this.$heightCanvas = document.createElement('canvas')
		this.$heightCanvas.width  = this.resolution
		this.$heightCanvas.height = this.resolution

		this.$normalCanvas = document.createElement('canvas')
		this.$normalCanvas.width  = this.resolution
		this.$normalCanvas.height = this.resolution

		this.$colorCanvas = document.createElement('canvas')
		this.$colorCanvas.width  = this.resolution
		this.$colorCanvas.height = this.resolution

		this.offscreen = new ComlinkWorker<WorkerModule>(
			new URL('./worker', import.meta.url),
			{}
		)
	}

	async renderHeight(properties: State['properties'], widgets: State['widgets']) {
		const resolution = properties.resolution
		
		if (resolution !== this.resolution) {
			this.resolution = resolution

			this.$heightCanvas.width  = this.resolution
			this.$heightCanvas.height = this.resolution
	
			this.$normalCanvas.width  = this.resolution
			this.$normalCanvas.height = this.resolution
	
			this.$colorCanvas.width  = this.resolution
			this.$colorCanvas.height = this.resolution
		}
		
		const { bitmap } = await this.offscreen.renderHeight({
			properties,
			widgets: widgets.filter(w => !w.disabled),
		})
		this.$heightCanvas.getContext('bitmaprenderer')!.transferFromImageBitmap(bitmap)
	}
	
	async renderNormal() {
		const $tmpCanvas = document.createElement('canvas')
		$tmpCanvas.width = this.resolution
		$tmpCanvas.height = this.resolution
		const ctx = $tmpCanvas.getContext('2d')!
		ctx.drawImage(this.$heightCanvas, 0, 0, this.resolution, this.resolution)

		const { bitmap } = await this.offscreen.renderNormal(
			ctx.getImageData(0, 0, this.resolution, this.resolution)
		)
		this.$normalCanvas.getContext('bitmaprenderer')!.transferFromImageBitmap(bitmap)
	}
	
	async renderColor(gradient: State['colorizer']['gradient']) {
		const $tmpCanvas = document.createElement('canvas')
		$tmpCanvas.width = this.resolution
		$tmpCanvas.height = this.resolution
		const ctx = $tmpCanvas.getContext('2d')!
		ctx.drawImage(this.$heightCanvas, 0, 0, this.resolution, this.resolution)
		
		const { bitmap } = await this.offscreen.renderColor(
			ctx.getImageData(0, 0, this.resolution, this.resolution),
			gradient
		)
		this.$colorCanvas.getContext('bitmaprenderer')!.transferFromImageBitmap(bitmap)
	}

	getImage(key: 'height' | 'normal' | 'color') {
		if (key === 'height') return this.$heightCanvas
		if (key === 'normal') return this.$normalCanvas
		if (key === 'color') return this.$colorCanvas
	}

	saveFile(map: 'height' | 'normal' | 'color' = 'height') {
		const cb: BlobCallback = blob => blob && saveAs(blob, `${ map }-${ Date.now() }.png`)
		const type = 'image/png'

		switch (map) {
			case 'height':
				this.$heightCanvas.toBlob(cb, type)
				break
				
			case 'normal':
				this.$normalCanvas.toBlob(cb, type)
				break
			
			case 'color':
				this.$colorCanvas.toBlob(cb, type)
				break
			
			default:
				throw new Error(`Map: ${ map } Not Found`)
		}
	}

}