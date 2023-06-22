const treeMinValue = (root) => {
    if (root === null) return Infinity;
    const smallestLeftValue = treeMinValue(root.left);
    const smallestRightValue = treeMinValue(root.right);
    return Math.min(root.val, smallestLeftValue, smallestRightValue);
  };