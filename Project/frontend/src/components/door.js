import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";




export function Door(props) {

    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "models/door/scene.gltf"
    );

    useEffect(() => {
        gltf.scene.scale.set(0.007, 0.007, 0.007);
       gltf.scene.position.set(props.x,props.y,props.z);
       gltf.scene.rotation.set(0, Math.PI/2, 0);
       gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = false;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf, props.x, props.y, props.z]);

    return <primitive object={gltf.scene} />;
}