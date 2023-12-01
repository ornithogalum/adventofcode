import { fileToArray } from "../fileReader"

export function solve(): number {
    return fileToArray("inputs/day1.txt")
        .map(l => {
            const nums = l.split("").map(c => parseInt(c)).filter(i => !!i)
            return parseInt(`${nums[0]}${nums[nums.length - 1]}`)
        })
        .reduce((prev, curr) => prev + curr, 0)
}