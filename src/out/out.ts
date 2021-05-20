export interface out
{
    output: (obj: unknown) => void
}

export class defaultOut implements out
{
    public output(obj: unknown): void
    {
        // eslint-disable-next-line no-console
        console.log(obj)
    }
}