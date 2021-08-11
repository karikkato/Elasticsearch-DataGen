import {Generator} from './generator/generator'
import {Out} from './out/out'

export function defaultRunner(generator: Generator, out: Out, iterations: number): void
{
    for(let i = 0; i < iterations; i++)
        out.output(generator.generate())
}
