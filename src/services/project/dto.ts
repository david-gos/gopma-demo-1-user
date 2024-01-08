import { UserInfoOutput } from '../user/dto'

export enum PermissionProject {
  ADMINISTRATOR,
  MEMBER
}

export interface UserRoleProjectOutput {
  id: string
  permission: number
  user: UserInfoOutput
}

export interface ProjectInfoOutput {
  id: string
  name: string
  status: string
  timeStart: string
  timeEnd: string
  roles: UserRoleProjectOutput[]
}

export interface CreateProjectInput {
  name: string
}
