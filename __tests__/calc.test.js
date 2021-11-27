// import { addOne } from '../calc'

// // jest 전역함수 test('테스트이름',테스트할 콜백함수)

// // describe('그룹이름', ()=>{테스트들} )
// describe('addOne', () => {
//     // 모든테스트의 가장앞단계에서 한번 실행되는 hook
//     beforeAll(() => {
//         console.log('beforeAll')
//     })

//     // 모튼테스트의 가장 마지막단계에서 한번
//     afterAll(() => {
//         console.log('afterAll')
//     })

//     // 각테스트의 전단계에서 
//     beforeEach(() => {
//         console.log('beforeEach')
//     })

//     // 각테스트의 마지막단계에서
//     afterEach(() => {
//         console.log('afterEach')
//     })
//     test('인수가 숫자인 경우', () => {
//     expect(addOne(2)).toBe(3)
//     expect(addOne(7)).toBe(8)
//     })

//     test('인수가 문자인 경우', () => {
//         expect(addOne('2')).toBe(3)
//         expect(addOne('77')).toBe(78)
//     })
// })
