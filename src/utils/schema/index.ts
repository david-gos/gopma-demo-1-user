export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
}

export type Auth = {
  __typename?: 'Auth'
  accessToken: Scalars['String']['output']
}

export type CreateUserInput = {
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  password: Scalars['String']['input']
  repassword: Scalars['String']['input']
  phoneNumber: Scalars['String']['input']
}

export type LoginUserInput = {
  username: Scalars['String']['input']
  password: Scalars['String']['input']
}
