import {Generator} from './generator/generator'
import {jsfGenerator} from './generator/jsfGenerator'
import {out, defaultOut} from './out/out'

;(function main()
{
    const generator: Generator = new jsfGenerator('C:/JavaScript/jferrer/@playground/elasticsearch-datagen/schemas/sample.json')
    const output: out = new defaultOut()

    for(let i = 1; i < 50; i++)
        output.output(generator.generate())
})()
