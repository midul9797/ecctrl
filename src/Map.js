/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: sirsaugsage (https://sketchfab.com/sirsausage)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fantasy-game-inn-192bf30a7e28425ab385aef19769d4b0
Title: Fantasy Game Inn
*/

import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Map(props) {
  const { nodes, materials } = useGLTF('./fantasy_game_inn.glb')

  return (
    <RigidBody type="fixed" colliders="trimesh" ccd>
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.11}>
          <mesh castShadow receiveShadow geometry={nodes.TheInn_bakeInn_0.geometry}>
            <meshStandardMaterial map={materials.bakeInn.map} />
          </mesh>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('./fantasy_game_inn.glb')
