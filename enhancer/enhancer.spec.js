const enhancer = require('./enhancer');
// const {repair} = require('./repair');

describe('enhancer', () => {
    describe('fail()', () => {
        it('durability goes down by 5 if enhancement is between zero and 14', () => {
            const item = { //arrange
                enhancement: 14,
                durability: 85
            };

            // act
            const actual = enhancer.fail(item);

            expect(actual.durability).toBe(80); // assert
        })

        it('durability decrease by 10 if enhancement is more than 14', () => {
            const item = { //arrange
                enhancement: 15,
                durability: 85
            };

            // act
            const actual = enhancer.fail(item);

            expect(actual.durability).toBe(75); // assert
        })

        it('if enhancement is 14 or lower, the item cannot be enhanced if it is below 25', () => {
            const item = {
                enhancement: 14,
                durability: 24,
              };
        
              expect(enhancer.fail(item)).toEqual(item);
        })

        it('decrease enhancement if item is enhaced is more than 16', () => {
            const item ={
                enhancement: 18,
            }

            const actual = enhancer.fail(item);
            expect(actual.enhancement).toBe(17);
        })
    });

    describe('success()', () => {
        it('should increase enhacement by 1', () => {
            const item = {
                enhancement: 18,
            }

            const actual = enhancer.success(item);
            expect(actual.enhancement).toBe(19);
        })
    })

    describe('repair()', () => {
        it ('repair to full durability', () => {
            const item = {
                name:"knife",
                type: "weapon",
                durability: 98,
                displayName:'[+3] knife',
            };
            expect(repair(item).durability).toEqual(100)
        })
        
    })


})