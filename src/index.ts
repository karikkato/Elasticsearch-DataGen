import {Generator} from './generator/generator'
import {jsfGenerator} from './generator/jsfGenerator'
import {defaultOut, Out} from './out/out'

export function defaultRunner(generator: Generator, out: Out, iterations: number): void
{
    for(let i = 0; i < iterations; i++)
        out.output(generator.generate())
}

(function main()
{
    const generator: Generator = new jsfGenerator('C:/JavaScript/jferrer/@playground/elasticsearch-datagen/schemas/sample.json')
    const output: Out = new defaultOut()

    defaultRunner(generator, output, 50)
})()
