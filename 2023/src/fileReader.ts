import { readFileSync } from 'fs'

export function fileToArray(fileName: string): string[] {
    const file = readFileSync(fileName, 'utf-8')
    return file.split(/\r?\n/)
}