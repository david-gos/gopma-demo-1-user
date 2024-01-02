function areObjectsChange(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
  const keys1 = Object.keys(obj1)

  // Kiểm tra từng khóa và giá trị
  return keys1.every((key) => obj1[key] === obj2[key])
}

export { areObjectsChange }
