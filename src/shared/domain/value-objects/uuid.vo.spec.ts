import { InvalidUuidError, Uuid } from "./uuid.vo"
import { validate as uuidValidate } from "uuid"

const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

describe('Uuid Unit Test', () => {
    test('Should throw error when uuid is invalid', () => {
        expect(() => {
            new Uuid('invalid-uuid')
        }).toThrowError('ID must be a valid UUID')
        expect(validateSpy).toHaveBeenCalledTimes(1)

        expect(() => {
            new Uuid('invalid-uuid')
        }).toThrowError(new InvalidUuidError())  
        expect(validateSpy).toHaveBeenCalledTimes(2)      
    })

    test('Should create a valid uuid', () => {
        const uuid = new Uuid();
        expect(uuid.id).toBeDefined();
        expect(uuidValidate(uuid.id)).toBeTruthy()
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    test('Should accept a valid uuid', () => {
        const uuid = new Uuid('6c5545e7-a0d9-4951-8bdb-1c8edadff327');
        expect(uuid.id).toBe('6c5545e7-a0d9-4951-8bdb-1c8edadff327');
        expect(uuidValidate(uuid.id)).toBeTruthy()
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })    
})