export const validHex = (str: string): boolean => {
	return /^#[0-9A-F]{6}$/i.test(str.toUpperCase())
}

export const randomHexColor = () => {
	const n = (Math.random() * 0xfffff * 1000000).toString(16)

	return n.slice(0, 6)
}