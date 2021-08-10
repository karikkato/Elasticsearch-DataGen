export interface Out
{
    output: (obj: unknown) => void
}

export class defaultOut implements Out
{
    public output(obj: unknown): void
    {
        // eslint-disable-next-line no-console
        console.log(obj)
    }
}
