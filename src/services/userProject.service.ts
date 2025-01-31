import { IUserProject } from "@/interfaces"
import prisma from "@/prisma/clients/core.client"

const addUserProject = async (data: IUserProject) => {
  const project = await prisma.userProject.create({
    data: {
      projectId: data.projectId,
      userId: data.userId,
    },
  })
  return project
}

const deleteUserProject = async (id: string) => {
    const project = await prisma.userProject.delete({
     where: { id },
    })
    return project
} 

const SUserProject = {
  addUserProject,
  deleteUserProject,
}

export default SUserProject
