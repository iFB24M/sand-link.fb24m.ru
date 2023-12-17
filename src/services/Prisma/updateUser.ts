'use server'

import type { IUser } from '@/interfaces/IUser.interface'
import { prisma } from '@/services/Prisma.service'

export const updateUser = async (email: string, password: string, data: IUser) => {
	const updatedUser = await prisma.user.update({
		where: {
			email, password
		},
		data
	})

	console.log(updatedUser)
}