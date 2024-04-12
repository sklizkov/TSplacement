// @ts-nocheck

import { FC, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as THREE from 'three'
import { Mesh } from 'three'
import { Canvas3D } from '@/components/Canvas3D'
import {
	ViewportWrapper,
	ControllBarLeft,
  ControllBarRight,
} from './styles'
import { Modes } from '@/types'
import { useRendererStore } from '@/stores/rendererStore'
import { Button, ButtonGroup } from '@/components/Button'
import { GradientPicker } from '@/components/GradientPicker'


interface ViewportProps {
	mode: Modes
	onChangeMode: (key: Modes) => void
  preview: boolean
  onChangePreview: (val: boolean) => void
}

export const Viewport: FC<ViewportProps> = ({
	mode,
	onChangeMode,
  preview,
  onChangePreview,
}) => {
	const { t } = useTranslation()

  const meshRef = useRef<Mesh>(null)
	const renderer = useRendererStore(state => state.renderer)
	const processing = useRendererStore(state => state.processing)

	useEffect(() => {
    if (meshRef.current !== null) {
      if (preview) {
        // 3D
        if (meshRef.current.material.type !== 'MeshStandardMaterial') {
          meshRef.current.material = new THREE.MeshStandardMaterial({
            displacementScale: .02,
            toneMapped: false,
            side: THREE.DoubleSide,
          })
        }

        const colorTex = new THREE.CanvasTexture(renderer.getImage(mode)!)
        const displacementTex = new THREE.CanvasTexture(renderer.getImage('height')!)
        const normalTex = new THREE.CanvasTexture(renderer.getImage('normal')!)

        colorTex.colorSpace = THREE.SRGBColorSpace
        displacementTex.colorSpace = THREE.SRGBColorSpace
        normalTex.colorSpace = THREE.SRGBColorSpace

        meshRef.current.material.map = colorTex
        meshRef.current.material.displacementMap = displacementTex
        meshRef.current.material.normalMap = normalTex
        meshRef.current.material.roughnessMap = displacementTex
      } else {
        // 2D
        if (meshRef.current.material.type !== 'MeshBasicMaterial') {
          meshRef.current.material = new THREE.MeshBasicMaterial({
            toneMapped: false,
            combine: THREE.NormalBlending,
            side: THREE.DoubleSide,
          })
        }

        const texture = new THREE.CanvasTexture(renderer.getImage(mode)!)
        texture.colorSpace = THREE.SRGBColorSpace
        meshRef.current.material.map = texture
      }

      meshRef.current.material.needsUpdate = true
    }
	}, [ processing, renderer, mode, preview ])

	return (
		<ViewportWrapper>
			<ControllBarLeft>
				<ButtonGroup direction='row'>
					<Button
						disabled={ mode === Modes.height }
						transparent={ mode === Modes.height }
						onClick={ () => onChangeMode(Modes.height) }
					>{ t('map.height') }</Button>
					<Button
						disabled={ mode === Modes.normal }
						transparent={ mode === Modes.normal }
						onClick={ () => onChangeMode(Modes.normal) }
					>{ t('map.normal') }</Button>
					<Button
						disabled={ mode === Modes.color }
						transparent={ mode === Modes.color }
						onClick={ () => onChangeMode(Modes.color) }
					>{ t('map.color') }</Button>
				</ButtonGroup>
			</ControllBarLeft>

      <ControllBarRight>
        <ButtonGroup direction='row'>
            <Button
              onClick={ () => onChangePreview(!preview) }
            >{ preview ? '2D' : '3D' }</Button>
          </ButtonGroup>
      </ControllBarRight>

			{/* <Canvas
				ref={ canvasRef }
			/> */}

      <Canvas3D
        ref={ meshRef }
      />

			{ mode === Modes.color && (
				<GradientPicker />
			) }
		</ViewportWrapper>
	)
}
