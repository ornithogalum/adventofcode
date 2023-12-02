import { describe, it, expect } from '@jest/globals'
import { solve } from "./day2.2"

describe('day2.2', () => {
    it('should solve', () => {
        expect(solve()).toEqual(77021)
    })
})