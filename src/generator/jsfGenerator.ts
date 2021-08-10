import fs from 'fs'

import faker from 'faker'
import {JSONSchema7} from 'json-schema'
import {extend, generate} from 'json-schema-faker'

import {Generator} from './generator'

extend('faker', () => faker)

export class jsfGenerator implements Generator
{
    private schema: string
    private schemaAsObject: JSONSchema7

    constructor(schemaFilename: string)
    {
        this.schema = fs.readFileSync(schemaFilename, {encoding: 'utf8'})
        this.schemaAsObject = JSON.parse(this.schema) as JSONSchema7
    }

    public generate(): unknown
    {
        return generate(this.schemaAsObject)
    }
}
