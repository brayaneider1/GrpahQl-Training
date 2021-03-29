import { tasks } from './sample'

export const resolvers = {
    Query: {
        hello: () => ('hello world con graph'),
        greet: (root, { name }) => (`Qiubo ${name} mano`),
        tasks: () => (tasks)
    },
    Mutation: {

        createTask: (_, { input }) => {
            input._id = tasks.length
            tasks.push(input)
            return input


        }
    }
}