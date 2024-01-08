function areObjectsChange(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
  const keys1 = Object.keys(obj1)

  // Kiểm tra từng khóa và giá trị
  return keys1.every((key) => obj1[key] === obj2[key])
}

const mapStringToEnum = <T extends Record<string, string>>(enumObject: T, value: string): T[keyof T] | undefined => {
  return Object.values(enumObject).includes(value as T[keyof T]) ? (value as T[keyof T]) : undefined
}

export { areObjectsChange, mapStringToEnum }
