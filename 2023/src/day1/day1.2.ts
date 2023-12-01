import { fileToArray } from "../fileReader"

export function solve(): number {
    return fileToArray("inputs/day1.txt")
        .map(l => {
            const nums = l.split("")
                .map((c, i) => {
                    const numString = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
                        .map((w, n) => <const>[w, n])
                        .filter(([w,]) => l.slice(i).startsWith(w))
                        .map(([, n]) => n + 1)
                        .at(0)
                    return numString ?? parseInt(c)
                })
                .filter(i => !!i)
            return parseInt(`${nums[0]}${nums[nums.length - 1]}`)
        })
        .reduce((prev, curr) => prev + curr, 0)
}