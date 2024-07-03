// src/AFrameScene.jsx
import 'aframe';
import { Entity, Scene } from 'aframe-react';

const AFrameScene = () => {
    return (
        <Scene>
            <a-assets>
                <a-asset-item id="star-wars-character" src="models/Eval.glb"></a-asset-item>
            </a-assets>

            <Entity primitive="a-sky" color="#ECECEC" />
            <Entity primitive="a-plane" rotation="-90 0 0" width="100" height="100" color="#7BC8A4" />
            <Entity gltf-model="#star-wars-character" animation-mixer position="0 0 -5" />
        </Scene>
    );
};

export default AFrameScene;
