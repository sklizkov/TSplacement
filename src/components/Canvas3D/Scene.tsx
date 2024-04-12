import { useEffect, forwardRef, useRef } from 'react'
import * as THREE from 'three'
import { Mesh } from 'three'
import { OrbitControls } from '@react-three/drei'
import { useAppStore } from '@/stores/appStore'


export const Scene = forwardRef<Mesh>((_, ref) => {
  const ocRef = useRef(null)
  const preview = useAppStore(state => state.panels.viewport.preview)

  useEffect(() => {
    // @ts-ignore
    ocRef.current!.reset()
  }, [ preview ])

	return (
    <>
      <OrbitControls
        ref={ ocRef }
        enableDamping={false}
        enableRotate={preview}

        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}

        minDistance={ .1 }
        maxDistance={ 2 }
      />

      <mesh
        ref={ ref }
      >
        <planeGeometry
          args={
            [1, 1, 1024 * 2, 1024 * 2]
          }
        />
        <meshBasicMaterial
          toneMapped={ false }
          combine={ THREE.NormalBlending }
          side={ THREE.DoubleSide }
        />
      </mesh>
    </>
	)
})
