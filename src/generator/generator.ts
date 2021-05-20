import faker from 'faker'

export interface Generator
{
    generate: () => unknown
}

export class defaultGenerator implements Generator
{
    public generate(): unknown
    {
        return {
            userName: faker.internet.userName(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            isSubscribed: faker.datatype.boolean(),
            photos: {
                icon: faker.internet.avatar()
            },
            timeStamp: faker.date.past()
        }
    }
}
