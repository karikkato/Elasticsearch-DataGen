import {Generator} from './generator/generator'
import {jsfGenerator} from './generator/jsfGenerator'
import {defaultOut, Out} from './out/out'
import {defaultRunner} from './runner'


(function main()
{
    const generator: Generator = new jsfGenerator('C:/JavaScript/jferrer/@playground/elasticsearch-datagen/schemas/sample.json')
    const output: Out = new defaultOut()

    defaultRunner(generator, output, 50)
})()
