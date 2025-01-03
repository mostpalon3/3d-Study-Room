/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/scene.gltf 
*/

import React from 'react'
import { useGLTF,useTexture } from '@react-three/drei';

import * as THREE from "three";

export function Office(props) {
  const { nodes, materials } = useGLTF('models/scene.gltf')
  const texture = useTexture("textures/Bake.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
      map:texture,
    })
  const textureGlassMaterial = new THREE.MeshStandardMaterial({
      map:texture,
      transparent:true,
      opacity:0.42,
    });
  return (
    <group {...props} dispose={null}>
      <group name="Mouse_con_botones_v11" rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh name="_boton_izquierdo001" geometry={nodes._boton_izquierdo001.geometry} material={textureMaterial} scale={10} />
        <mesh name="Boton_derecho001" geometry={nodes.Boton_derecho001.geometry} material={textureMaterial} scale={10} />
        <mesh name="boton_mitad001" geometry={nodes.boton_mitad001.geometry} material={textureMaterial} scale={10} />
      </group>
      <group name="Desk" position={[-0.074, 0, -1.521]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh name="Plane001_Plane002_BlackWood001" geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_1" geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_2" geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_3" geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_4" geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry} material={textureMaterial} />
      </group>
      <mesh name="SM_ShelfSM_Shelf1" geometry={nodes.SM_ShelfSM_Shelf1.geometry} material={textureMaterial} position={[-0.868, 1.694, -2.038]} />
      <group name="LavaLamp" position={[-1.302, 2.071, -1.986]}>
        <mesh name="Node-Mesh001" geometry={nodes['Node-Mesh001'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_1" geometry={nodes['Node-Mesh001_1'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_2" geometry={nodes['Node-Mesh001_2'].geometry} material={textureMaterial} />
      </group>
      <mesh name="WawaRug" geometry={nodes.WawaRug.geometry} material={textureMaterial} position={[-0.281, 0.009, 0.765]} />
      <group name="salameche" position={[-0.61, 2.044, -1.958]} rotation={[-Math.PI, 0.728, -Math.PI]}>
        <mesh name="mesh434900071" geometry={nodes.mesh434900071.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_1" geometry={nodes.mesh434900071_1.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_2" geometry={nodes.mesh434900071_2.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_3" geometry={nodes.mesh434900071_3.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_4" geometry={nodes.mesh434900071_4.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_5" geometry={nodes.mesh434900071_5.geometry} material={textureMaterial} />
      </group>
      <group name="keyboard" position={[-0.044, 0.981, -1.346]} rotation={[0, -0.165, 0]}>
        <mesh name="mesh425587018" geometry={nodes.mesh425587018.geometry} material={textureMaterial} />
        <mesh name="mesh425587018_1" geometry={nodes.mesh425587018_1.geometry} material={textureMaterial} />
        <mesh name="mesh425587018_2" geometry={nodes.mesh425587018_2.geometry} material={textureMaterial} />
        <mesh name="mesh425587018_3" geometry={nodes.mesh425587018_3.geometry} material={textureMaterial} />
      </group>
      <group name="plant" position={[-0.78, 1.071, -1.61]}>
        <mesh name="mesh24448074" geometry={nodes.mesh24448074.geometry} material={textureMaterial} />
        <mesh name="mesh24448074_1" geometry={nodes.mesh24448074_1.geometry} material={textureMaterial} />
        <mesh name="mesh24448074_2" geometry={nodes.mesh24448074_2.geometry} material={textureMaterial} />
      </group>
      <group name="Houseplant_7" position={[-2.019, -0.042, -1.526]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh name="Houseplant_7_1" geometry={nodes.Houseplant_7_1.geometry} material={textureMaterial} />
        <mesh name="Houseplant_7_2" geometry={nodes.Houseplant_7_2.geometry} material={textureMaterial} />
        <mesh name="Houseplant_7_3" geometry={nodes.Houseplant_7_3.geometry} material={textureMaterial} />
      </group>
      <mesh name="ComputerMouse_mesh" geometry={nodes.ComputerMouse_mesh.geometry} material={textureMaterial} position={[0.546, 0.95, -1.047]} rotation={[3.108, 0.103, -3.04]} />
      <group name="Books" position={[-0.883, 1.818, -1.941]} rotation={[Math.PI, -0.726, Math.PI]}>
        <mesh name="mesh1958407320" geometry={nodes.mesh1958407320.geometry} material={textureMaterial} />
        <mesh name="mesh1958407320_1" geometry={nodes.mesh1958407320_1.geometry} material={textureMaterial} />
        <mesh name="mesh1958407320_2" geometry={nodes.mesh1958407320_2.geometry} material={textureMaterial} />
        <mesh name="mesh1958407320_3" geometry={nodes.mesh1958407320_3.geometry} material={textureMaterial} />
        <mesh name="mesh1958407320_4" geometry={nodes.mesh1958407320_4.geometry} material={textureMaterial} />
        <mesh name="mesh1958407320_5" geometry={nodes.mesh1958407320_5.geometry} material={textureMaterial} />
        <mesh name="mesh1958407320_6" geometry={nodes.mesh1958407320_6.geometry} material={textureMaterial} />
        <mesh name="mesh1958407320_7" geometry={nodes.mesh1958407320_7.geometry} material={textureMaterial} />
        <mesh name="mesh1958407320_8" geometry={nodes.mesh1958407320_8.geometry} material={textureMaterial} />
      </group>
      <group name="IMac_01_Cube026" position={[0.428, 0.955, -1.668]} rotation={[-3.14, 0.376, 3.129]}>
        <mesh name="IMac_01_Cube026-Mesh" geometry={nodes['IMac_01_Cube026-Mesh'].geometry} material={textureMaterial} />
        <mesh name="IMac_01_Cube026-Mesh_1" geometry={nodes['IMac_01_Cube026-Mesh_1'].geometry} material={textureMaterial} />
      </group>
      <group name="Node" position={[-2.678, 1.993, 1.334]} rotation={[0, -1.571, 0]}>
  <mesh
    geometry={nodes['Node-Mesh003'].geometry}
    material={nodes['Node-Mesh003'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_1'].geometry}
    material={nodes['Node-Mesh003_1'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_2'].geometry}
    material={nodes['Node-Mesh003_2'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_3'].geometry}
    material={nodes['Node-Mesh003_3'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_4'].geometry}
    material={nodes['Node-Mesh003_4'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_5'].geometry}
    material={nodes['Node-Mesh003_5'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_6'].geometry}
    material={nodes['Node-Mesh003_6'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_7'].geometry}
    material={nodes['Node-Mesh003_7'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_8'].geometry}
    material={nodes['Node-Mesh003_8'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_9'].geometry}
    material={nodes['Node-Mesh003_9'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_10'].geometry}
    material={nodes['Node-Mesh003_10'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_11'].geometry}
    material={nodes['Node-Mesh003_11'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_12'].geometry}
    material={nodes['Node-Mesh003_12'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_13'].geometry}
    material={nodes['Node-Mesh003_13'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_14'].geometry}
    material={nodes['Node-Mesh003_14'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_15'].geometry}
    material={nodes['Node-Mesh003_15'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_16'].geometry}
    material={nodes['Node-Mesh003_16'].material || textureMaterial}
  />
  <mesh
    geometry={nodes['Node-Mesh003_17'].geometry}
    material={nodes['Node-Mesh003_17'].material || textureMaterial}
  />
</group>
      <group name="Node001" position={[-2.595, 0.7, -0.298]}>
        <mesh name="Node-Mesh004" geometry={nodes['Node-Mesh004'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh004_1" geometry={nodes['Node-Mesh004_1'].geometry} material={textureMaterial} />
      </group>
      <mesh name="Mousepad" geometry={nodes.Mousepad.geometry} material={textureMaterial} position={[0.534, 0.946, -1.037]} rotation={[-Math.PI / 2, 0, 0]} />
      <group name="Lamp" position={[1.786, 2.289, -1.557]} rotation={[-0.087, 0.42, 0.824]}>
        <mesh name="Cylinder400" geometry={nodes.Cylinder400.geometry} material={textureMaterial} />
        <mesh name="Cylinder400_1" geometry={nodes.Cylinder400_1.geometry} material={textureMaterial} />
        <mesh name="Cylinder400_2" geometry={nodes.Cylinder400_2.geometry} material={textureMaterial} />
        <mesh name="Cylinder400_3" geometry={nodes.Cylinder400_3.geometry} material={textureMaterial} />
      </group>
      <group name="OfficeChair" position={[-0.598, -0.004, -0.421]} rotation={[-Math.PI / 2, 0, 2.497]}>
        <mesh name="OfficeChair_1" geometry={nodes.OfficeChair_1.geometry} material={textureMaterial} />
        <mesh name="OfficeChair_2" geometry={nodes.OfficeChair_2.geometry} material={textureMaterial} />
        <mesh name="OfficeChair_3" geometry={nodes.OfficeChair_3.geometry} material={textureMaterial} />
      </group>
      <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={textureMaterial} />
      <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={textureGlassMaterial} />
      <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={textureMaterial} />
    </group>
  )
}

useGLTF.preload('models/scene.gltf')
