import { describe, it, expect } from '@jest/globals'
import { solve } from "./day2.1"

describe('day2.1', () => {
    it('should solve', () => {
        expect(solve()).toEqual(2285)
    })
})