import { fileToArray } from "../fileReader"

export function solve(): number {
    const colorLimits: Record<string, number> = {
        "red": 12,
        "green": 13,
        "blue": 14,
    }

    return fileToArray("inputs/day2.txt")
        .map(line => {
            const [gameData, turns] = line.split(":");
            const valid = turns.split(";").every(turn => {
                return turn.split(",").every(show => {
                    const [, value, color] = show.split(" ")
                    return parseInt(value) <= colorLimits[color]
                })
            })
            return valid ? parseInt(gameData.split(" ")[1]) : 0
        })
        .reduce((prev, curr) => prev + curr, 0)
}