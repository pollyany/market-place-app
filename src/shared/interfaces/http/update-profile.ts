import { UserInterface } from '../user'

export interface UpdateProfileParams {
  name: string
  email: string
  phone: string
  newPassword?: string
  password?: string
}

export interface UpdateProfileResponse {
  user: UserInterface & {
    updatedAt: string
    deletedAt?: string
  }
}