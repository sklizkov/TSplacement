// @ts-nocheck
import { randomInt } from '@/utils/math'
import { renderWidget } from '@/models/widgets'
import { Colorizer } from '@/models/Colorizer'


let RESOLUTION = 8192

export const renderHeight = ({ properties, widgets }) => {
	RESOLUTION = properties.resolution

	// Context
	const $heightCanvas = new OffscreenCanvas(RESOLUTION, RESOLUTION)
	const context = $heightCanvas.getContext('2d')!

	// Vars
	const { width, height } = $heightCanvas
	const backgroundColor = `rgb(${ properties.brightness }, ${ properties.brightness }, ${ properties.brightness })`

	let iterations = properties.iterations

	// Clear
	context.clearRect(0, 0, width, height)

	// Background
	context.fillStyle = backgroundColor
	context.fillRect(0, 0, width, height)

	// Iterations
	while(widgets.length && iterations--) {
		if ((iterations & 1) === 1) {
			context.translate(width, 0)
			context.scale(-1, 1)
		} else {
			context.translate(0, height)
			context.scale(1, -1)
		}

		const payload = widgets[randomInt(0, widgets.length - 1)]

		renderWidget(
			payload.type,
			context,
			payload
		)
		
	}

	return {
		bitmap: $heightCanvas.transferToImageBitmap(),
	}
}

export const renderNormal = (imageData) => {
	// Context
	const $normalCanvas = new OffscreenCanvas(RESOLUTION, RESOLUTION)
	const contextNormal = $normalCanvas.getContext('2d')!

	// Vars
	const { width, height } = $normalCanvas
	const resolution = RESOLUTION

	const source = imageData // contextHeight.getImageData(0, 0, width, height)
	const destination = contextNormal.createImageData(width, height)

	// Draw
	const n = width * height * 4, r4 = resolution * 4
	for (let i = 0; i < n; i += 4) {
		let x1, x2

		if (i % r4 === 0) {
			x1 = source.data[i]
			x2 = source.data[i + 4]
		} else if (i % r4 === (resolution - 1) * 4) {
			x1 = source.data[i - 4]
			x2 = source.data[i]
		} else {
			x1 = source.data[i - 4]
			x2 = source.data[i + 4]
		}

		let y1, y2

		if (i < r4) {
			y1 = source.data[i]
			y2 = source.data[i + r4]
		} else if (i > r4 * (resolution - 1)) {
			y1 = source.data[i - r4]
			y2 = source.data[i]
		} else {
			y1 = source.data[i - r4]
			y2 = source.data[i + r4]
		}

		destination.data[i + 0] = (x1 - x2) + 127
		destination.data[i + 1] = (y1 - y2) + 127
		destination.data[i + 2] = 255
		destination.data[i + 3] = 255
	}

	contextNormal.putImageData(destination, 0, 0)

	return {
		bitmap: $normalCanvas.transferToImageBitmap(),
	}
}

export const renderColor = (imageData, gradient) => {
	// Vars
	// const { width, height } = $heightCanvas
	const resolution = RESOLUTION

	// Context
	const $colorCanvas = new OffscreenCanvas(RESOLUTION, RESOLUTION)
	// const contextHeight = $heightCanvas.getContext('2d')!
	const contextColor = $colorCanvas.getContext('2d')!

	const hData = imageData // contextHeight.getImageData(0, 0, resolution, resolution)
	// const mData = mapContext.getImageData(0, 0, $map.width, $map.height)
	const mData = Colorizer._getColorMap(gradient)!

	const destination = contextColor.createImageData(resolution, resolution)

	const red = [], green = [], blue = []

	for (let i = 0; i <= 1023; i += 4) {
		red.push(mData.data[i + 0])
		green.push(mData.data[i + 1])
		blue.push(mData.data[i + 2])
	}

	const l = (resolution ** 2) * 4
	for (let i = 0; i < l; i += 4) {
		destination.data[i + 0] = red[hData.data[i]]
		destination.data[i + 1] = green[hData.data[i]]
		destination.data[i + 2] = blue[hData.data[i]]
		destination.data[i + 3] = 255
	}

	contextColor.clearRect(0, 0, resolution, resolution)
	contextColor.globalCompositeOperation = 'source-over'
	contextColor.putImageData(destination, 0, 0)

	return {
		bitmap: $colorCanvas.transferToImageBitmap(),
	}
}