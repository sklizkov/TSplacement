import { forwardRef, memo } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Mesh } from 'three'
import {
	CanvasWrapper,
} from './styles'
import { Scene } from './Scene'


export const Canvas3D = memo(forwardRef<Mesh>((_, ref) => {

	return (
		<CanvasWrapper>
      <Canvas
        dpr={ [1, 2] }
        camera={ {
          fov: 75,
          near: .01,
          far: 1000,
          position: [0, 0, 1],
        } }
        gl={ {
          toneMapping: THREE.CineonToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        } }
      >
        <pointLight
          color="white"
          intensity={ 3 }
          position={[0, 1, 1]}
          distance={ 1000 }
        />
        <pointLight
          color="white"
          intensity={ 3 }
          position={[-1, -1, 1]}
          distance={ 1000 }
        />
        <pointLight
          color="white"
          intensity={ 3 }
          position={[1, -1, 1]}
          distance={ 1000 }
        />
        <ambientLight color='white' intensity={ 1 } />

        <Scene
          ref={ ref }
        />
      </Canvas>
		</CanvasWrapper>
	)
}))
