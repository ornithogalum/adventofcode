import { fileToArray } from "../fileReader"

export function solve(): number {
    return fileToArray("inputs/day2.txt")
        .map(line => {
            const [, turns] = line.split(":");
            let colorValues: Record<string, number> = { "red": 0, "green": 0, "blue": 0 };
            
            turns.split(";").forEach(turn => {
                turn.split(",").every(show => {
                    const [, value, color] = show.split(" ")
                    colorValues[color] = Math.max(colorValues[color], parseInt(value));
                    return colorValues
                })
            });

            const { red, green, blue } = colorValues;
            return red * blue * green;
        })
        .reduce((prev, curr) => prev + curr, 0);
}