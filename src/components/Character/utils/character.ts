import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.frustumCulled = true;

                // Provide colors to the body parts dynamically since they lack textures
                if (mesh.material) {
                  // Clone it so we don't change all "default" meshes at once
                  mesh.material = (mesh.material as THREE.Material).clone();
                  const m = mesh.material as THREE.MeshStandardMaterial;

                  // Walk up the parent hierarchy to concatenate all names
                  let currentObj: THREE.Object3D | null = mesh;
                  let fullNames = "";
                  while (currentObj) {
                    if (currentObj.name) {
                      fullNames += currentObj.name.toLowerCase() + " ";
                    }
                    currentObj = currentObj.parent;
                  }
                  
                  if (fullNames.includes("shirt") || fullNames.includes("body")) {
                    m.color.setHex(0x1d3557); // Deep blue shirt
                  } else if (fullNames.includes("pant")) {
                    m.color.setHex(0x1a1a1a); // Dark pants
                  } else if (fullNames.includes("shoe") || fullNames.includes("sole")) {
                    m.color.setHex(0xf1faee); // White/light shoes
                  } else if (
                    fullNames.includes("hand") ||
                    fullNames.includes("neck") ||
                    fullNames.includes("ear") ||
                    fullNames.includes("face") ||
                    fullNames.includes("head") ||
                    fullNames.includes("cube") || 
                    fullNames.includes("plane")
                  ) {
                    m.color.setHex(0xffcdac); // Skin color
                  }
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
