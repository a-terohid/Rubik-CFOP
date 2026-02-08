type Token = string;

export function expandAlgorithm(tokens: Token[]): Token[] {
  const stack: Token[][] = [];
  let current: Token[] = [];

  let i = 0;
  while (i < tokens.length) {
    const token = tokens[i];

    if (token === "(") {
      stack.push(current);
      current = [];
      i++;
      continue;
    }

    if (token === ")") {
      const group = current;
      const prev = stack.pop();
      if (!prev) throw new Error("Unmatched )");

      // نگاه به ضرب
      const next = tokens[i + 1];
      if (next?.startsWith("*")) {
        const times = parseInt(next.replace("*", "").trim(), 10);
        if (isNaN(times)) throw new Error("Invalid multiplier");

        const repeated: Token[] = [];
        for (let t = 0; t < times; t++) repeated.push(...group);

        current = [...prev, ...repeated];
        i += 2; // skip "* n"
      } else {
        current = [...prev, ...group];
        i++;
      }
      continue;
    }

    // توکن معمولی
    current.push(token);
    i++;
  }

  if (stack.length > 0) {
    throw new Error("Unmatched (");
  }

  return current;
}