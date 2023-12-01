import { describe, it, expect } from '@jest/globals'
import { solve } from "./day1.1"

describe('day1.1', () => {
    it('should solve', () => {
        expect(solve()).toEqual(56506)
    })
})