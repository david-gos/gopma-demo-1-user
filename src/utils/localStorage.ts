import { UserInfoOutput } from '.'

const userLocal = {
  saveUser(data: UserInfoOutput | null) {
    localStorage.setItem('user-info', JSON.stringify(data))
  },
  getUser(): UserInfoOutput | null {
    const userInfor = localStorage.getItem('user-info')

    return userInfor ? JSON.parse(userInfor) : {}
  }
}

export { userLocal }
