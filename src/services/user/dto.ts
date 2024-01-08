export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

export interface UserInfoOutput {
  email: string
  phone: string
  firstName: string
  lastName: string
  dob: string
  gender: string
}

export interface ProfileUserInput {
  firstName: string
  lastName: string
  dob?: string
  gender?: string
}
