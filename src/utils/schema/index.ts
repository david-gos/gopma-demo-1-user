export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: Date; output: Date }
}

export type Auth = {
  __typename?: 'Auth'
  accessToken: Scalars['String']['output']
}

export type CreateUserInput = {
  email: Scalars['String']['input']
  phone: Scalars['String']['input']
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  dob?: Scalars['String']['input']
  gender?: Scalars['String']['input']
  password: Scalars['String']['input']
  repassword: Scalars['String']['input']
}

export type UserInfoOutput = {
  email: Scalars['String']['output']
  phone: Scalars['String']['output']
  firstName: Scalars['String']['output']
  lastName: Scalars['String']['output']
  dob: Scalars['Date']['output']
  gender: Scalars['String']['output']
}

export type ProfileUserInput = {
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  dob?: Scalars['String']['input']
  gender?: Scalars['String']['input']
}

export type LoginUserInput = {
  username: Scalars['String']['input']
  password: Scalars['String']['input']
}
