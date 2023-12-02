import { fileToArray } from "../fileReader"

export function solve(): number {
    return fileToArray("inputs/day2.txt")
        .map(l => {
            const game = l.split(":")
            const gameTurns = game[1].split(";")
            let red = 0, green = 0, blue = 0
            gameTurns.map(g => {
                const cubes = g.split(",")
                cubes.map(c => {
                    const x = c.split(" ")
                    switch (x[2]) {
                        case "red":
                            red = Math.max(red, parseInt(x[1]))
                            break;
                        case "green":
                            green = Math.max(green, parseInt(x[1]))
                            break;
                        case "blue":
                            blue = Math.max(blue, parseInt(x[1]))
                            break;
                    }
                })
            })
            return red * blue * green
        })
        .reduce((prev, curr) => prev + curr, 0)
}