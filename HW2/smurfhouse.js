getPositions = () => {
  positions = [];

  // const numSegments = 5;
  // const radius = 1;
  // let cubePositions = [];
  //   for (let i = 0; i <2; i ++) {
  //     if (i===0) { y = 1; }
  //     else { y = -1; }
  //     for(let angle = -3.14; angle < 3.14; angle+=(2*3.14/numSegments)) {
  //       // console.log('angle: ' + angle);
  //       let x = radius*math.cos(angle);
  //       let z = radius*math.sin(angle);
  //       // console.log("x, y, z: " + x + ", " + y + ", " + z);
  //       cubePositions.push(x, y, z);
  //       console.log(cubePositions);
  //     }
  //   };

  positions = positions.concat(getCylinderPositions()); //indices 0-11


  positions = positions.concat(getPyramidPositions()); //indices 12-16

  positions = positions.concat(getPlanePositions()); //indices 17-20
  console.log(positions);
  return positions;

}

getCylinderPositions = () => {
  const numSegments = 5;
  const radius = 1;
  let cylinderPositions = [];
    for (let i = 0; i <2; i ++) {
      if (i===0) { y = 1; }
      else { y = -1; }
      for(let angle = -3.14; angle < 3.14; angle+=(2*3.14/numSegments)) {
        // console.log('angle: ' + angle);
        let x = radius*math.cos(angle);
        let z = radius*math.sin(angle);
        // console.log("x, y, z: " + x + ", " + y + ", " + z);
        cylinderPositions.push(x, y, z);
      }
    };
  return cylinderPositions;
}

getPyramidPositions = () => {
    return pyramidPositions = [
        0, 2, 0,
        -1.0,  1.0, -1.0,
        -1.0,  1.0,  1.0,
         1.0,  1.0,  1.0,
         1.0,  1.0, -1.0,
  ];
}

getPlanePositions = () => {
    return planePositions = [
  -5, -1, -5,
  -5, -1, 5,
  5, -1, -5,
  5, -1, 5,
  ];
}

getCylinderIndices = () => {
  indices = [


        0, 1, 2,     0, 2, 3,     3, 4, 5, //top base
        0, 11, 10,   5, 4, 10,
        3, 9, 10,    3, 4, 10,
        2, 3, 9,     9, 8, 2,
        1, 2, 7,     7, 8, 2,
        0, 1, 7,     0, 7, 6,
        11, 10, 9,   11, 9, 8,    8, 7, 6,  //bottom base

        12, 13, 14,  12, 14, 15,  //roof pyramid
        12, 15, 16,  12, 13, 16,   

        // 0, 1, 2,    0, 1, 3,
        17, 18, 19,   18, 19, 20, //plane
  ];
return indices;
}
    



getCubePositions = () => {
  const cubePositions = [
        // Front face
        -1.0, -1.0,  1.0,
         1.0, -1.0,  1.0,
         1.0,  1.0,  1.0,
        -1.0,  1.0,  1.0,
        // Back face
        -1.0, -1.0, -1.0,
        -1.0,  1.0, -1.0,
         1.0,  1.0, -1.0,
         1.0, -1.0, -1.0,
        // Top face
        -1.0,  1.0, -1.0,
        -1.0,  1.0,  1.0,
         1.0,  1.0,  1.0,
         1.0,  1.0, -1.0,
        // Bottom face
        -1.0, -1.0, -1.0,
         1.0, -1.0, -1.0,
         1.0, -1.0,  1.0,
        -1.0, -1.0,  1.0,
        // Right face
         1.0, -1.0, -1.0,
         1.0,  1.0, -1.0,
         1.0,  1.0,  1.0,
         1.0, -1.0,  1.0,
        // Left face
        -1.0, -1.0, -1.0,
        -1.0, -1.0,  1.0,
        -1.0,  1.0,  1.0,
        -1.0,  1.0, -1.0,
  ]
return cubePositions;
}

getCubeIndices = () => {
  const cubeIndices = [
        0,  1,  2,      0,  2,  3,    // front
        4,  5,  6,      4,  6,  7,    // back
        8,  9,  10,     8,  10, 11,   // top
        12, 13, 14,     12, 14, 15,   // bottom
        16, 17, 18,     16, 18, 19,   // right
        20, 21, 22,     20, 22, 23,   // left
]
return cubeIndices;
}


getColors = () => {
  let colors = [];
  const faceColors = [
        [1.0,  0.0,  0.0,  1.0],    // top face: white
        [1.0,  0.0,  0.0,  1.0],    // 1 face: red
        [0.0,  1.0,  0.0,  1.0],    // 2 face: green
        [0.0,  0.0,  1.0,  1.0],    // 3 face: blue
        [1.0,  1.0,  0.0,  1.0],    // 4 face: yellow
        [1.0,  0.0,  1.0,  1.0],    // 5 face: purple
    ];
    // Convert the array of colors into a table for all the vertices.
    for (let j = 0; j < faceColors.length; ++j) {
        const c = faceColors[j];
        // Repeat each color four times for the four vertices of the face
        colors = colors.concat(c, c, c, c);
    }
    return colors;
}
