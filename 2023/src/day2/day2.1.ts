import { fileToArray } from "../fileReader"

// 12 red cubes, 13 green cubes, and 14 blue cubes

export function solve(): number {
    return fileToArray("inputs/day2.txt")
        .map(l => {
            const game = l.split(":")
            const gameTurns = game[1].split(";")
            let valid = true;
            gameTurns.map(g => {
                const cubes = g.split(",")
                cubes.map(c => {
                    const x = c.split(" ")
                    switch (x[2]) {
                        case "red":
                            valid = valid ? parseInt(x[1]) <= 12 : valid
                            break;
                        case "green":
                            valid = valid ? parseInt(x[1]) <= 13 : valid
                            break;
                        case "blue":
                            valid = valid ? parseInt(x[1]) <= 14 : valid
                            break;
                    }
                })
            })
            return valid ? parseInt(game[0].split(" ")[1]) : 0
        })
        .reduce((prev, curr) => prev + curr, 0)
}