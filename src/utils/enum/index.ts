enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

const mapStringToEnum = <T extends Record<string, string>>(enumObject: T, value: string): T[keyof T] | undefined => {
  return Object.values(enumObject).includes(value as T[keyof T]) ? (value as T[keyof T]) : undefined
}

export { Gender, mapStringToEnum }
