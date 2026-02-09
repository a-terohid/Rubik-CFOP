export const rubikScramble = (moves = 20) => {
  const faces = ['R', 'L', 'U', 'D', 'F', 'B'];
  const modifiers = ['', '\'', '2'];

  const axisMap: Record<string, string> = {
    R: 'x', L: 'x',
    U: 'y', D: 'y',
    F: 'z', B: 'z',
  };

  const scramble: string[] = [];
  let prevAxis = '';

  for (let i = 0; i < moves; i++) {
    let face = faces[Math.floor(Math.random() * faces.length)];
    let axis = axisMap[face];

    while (axis === prevAxis) {
      face = faces[Math.floor(Math.random() * faces.length)];
      axis = axisMap[face];
    }

    const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
    scramble.push(face + modifier);
    prevAxis = axis;
  }

  return scramble.join(' ');
};