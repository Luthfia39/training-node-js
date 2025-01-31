import { ITask } from "@/interfaces"
import prisma from "@/prisma/clients/core.client"
import { sendTaskNotification } from "./kafka.service"

const getTasks = async () => {
  const tasks = await prisma.task.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      status: true,
    },
  })

  return tasks
}

const addTask = async (data: ITask) => {
  const task = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
      status: data.status,
      dueDate: data.dueDate,
      projectId: data.projectId,
      assigneeId: data.assigneeId,
    },
  })

  await sendTaskNotification(task, "created")
  return task
}

const taskById = async (id: string) => {
    const task = await prisma.task.findUnique({
        where: {
            id,
        }
    })
    return task
}

const updateTask = async (data: ITask, id: string) => {
    const task = await prisma.task.update({
        where: { id },
        data: {
            title: data.title,
            description: data.description,
            status: data.status,
            dueDate: data.dueDate,
        },
    })
    return task
}

const deleteTask = async (id: string) => {
    const task =await prisma.task.delete({
        where: {
            id,
        },
    })
    return task
}

const getTaskByProject = async (projectId: string) =>{
    const tasks = await prisma.task.findMany({
        where: {
            projectId,
        },
        select: {
            id: true,
            title: true,
            description: true,
            status: true,
            dueDate: true,
            assigneeId: true,
        },
    })
    return tasks
}

const STask = {
    getTasks,
    addTask,
    taskById,
    updateTask,
    deleteTask,
    getTaskByProject,
}

export default STask