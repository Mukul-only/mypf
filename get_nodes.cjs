const fs = require('fs');
const data = fs.readFileSync('public/models/character.glb');
const jsonChunkLength = data.readUInt32LE(12);
const jsonString = data.toString('utf8', 20, 20 + jsonChunkLength);
const gltf = JSON.parse(jsonString);

gltf.nodes.forEach(node => {
  if (node.mesh !== undefined) {
    const mesh = gltf.meshes[node.mesh];
    const matIndex = mesh.primitives[0].material;
    const matName = matIndex !== undefined ? gltf.materials[matIndex].name : 'none';
    console.log(`${node.name || 'Unnamed'} -> ${matName}`);
  }
});
