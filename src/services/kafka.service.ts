import { producer, TOPICS } from "@/configs/kafka.config"
import { IProject, ITask } from "@/interfaces"
import { UserProject } from "@/prisma/generated/core"
import { CustomError } from "@/utils"

type ProjectAction = "created" | "updated" | "deleted"
type TaskAction = "created" | "updated" | "deleted"

export const sendProjectNotification = async (
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  project: IProject & { userProjects: UserProject[] },
  action: ProjectAction,
) => {
  try {
    const notifications = project.userProjects.map((member) => ({
<<<<<<< Updated upstream
=======
=======
  project: IProject & { UserProject: UserProject[] },
  action: ProjectAction,
) => {
  try {
    console.log(project)
    const notifications = project.UserProject.map((member) => ({
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      topic: TOPICS.PROJECT_CHANGES,
      messages: [
        {
          value: JSON.stringify({
            projectId: project.id,
            action: action,
            projectName: project.title,
            userId: member.userId,
            timestamp: new Date().toISOString(),
          }),
        },
      ],
    }))
<<<<<<< Updated upstream

    await Promise.all(notifications.map((notification) => producer.send(notification)))
=======
<<<<<<< Updated upstream

    await Promise.all(notifications.map((notification) => producer.send(notification)))
=======
    console.log(notifications)

    await Promise.all(notifications.map(async (notification) => {
        console.log('notification', notification)
        const res = await producer.send(notification)
        console.log('res', res)
    }))
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  } catch (error: any) {
    throw new CustomError(500, error.message)
  }
}

export const sendTaskNotification = async (task: ITask, action: TaskAction) => {
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  try {
    const notification = {
      topic: TOPICS.TASK_CHANGES,
      messages: [
        {
          value: JSON.stringify({
            taskId: task.id,
            action: action,
            taskName: task.title,
            userId: task.assigneeId,
            timestamp: new Date().toISOString(),
          }),
        },
      ],
    }

    await producer.send(notification)
  } catch (error: any) {
    throw new CustomError(500, error.message)
  }
}
<<<<<<< Updated upstream
=======
=======
    try {
        const notification = {
            topic: TOPICS.TASK_CHANGES,
            messages: [{
                value: JSON.stringify({
                    taskId: task.id,
                    action: action,
                    taskName: task.title,
                    userId: task.assigneeId,
                    timestamp: new Date().toISOString()
                })
            }]
        }

        await producer.send(notification)
    } catch (error: any) {
        throw new CustomError(500, error.message)
    }
}
>>>>>>> Stashed changes
>>>>>>> Stashed changes
