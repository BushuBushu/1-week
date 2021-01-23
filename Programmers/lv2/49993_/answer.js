function solution(skill, skill_trees) {
  const trees = skill_trees.map((tree) => {
    return tree.split("").filter((char) => skill.includes(char));
  });

  let count = trees.length;
  trees.map((tree) => {
    let isRight = true;
    let index = 0;
    for (let char of tree) {
      if (skill.includes(char)) {
        if (skill[index++] !== char) {
          isRight = false;
          break;
        }
      }
    }
    if (!isRight) count--;
  });

  return count;
}
console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
