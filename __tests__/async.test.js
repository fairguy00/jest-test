function asyncFn() {
    // 비동기 함수는 프로미스 객체를 반환할수 있어야 한다
    // promise(callback function)의 첫번째 인수는 resolve 를 사용 할수 있다
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Passes!')
        }, 6000)
    })
}

describe('비동기', () => {

    // test(name, fn, timeout)는 timeout 5초(default) 까지 대기한다
    // done 이 매개변수로 들어왔는데 done() 이 없다면 계속대기 하게되므로 5초후에 종료된다
    test('done', (done) => {//done 이라는 매개변수를 주고 done()을 넣으면 done() 이 실행될때 까지 기다린다
        asyncFn().then(r => {
            expect(r).toBe('Passes!')
            done()//test() 는비동기 함수가 아니므로 실제로 done()이 있음으로해서 대기한다
        })
    })

    // test()는 두번째인수 - 콜백함수가 Promise 객체를 반환하는 구조라면 대기한다
    test('then', () => {
        return asyncFn().then(r => {
            expect(r).toBe('Passes!')
        })
    })

    test('resolves', () => {
        return expect(asyncFn()).resolves.toBe('Passes!')
    })
    
    // 위와 다르게 콜백에 async 를 붙임
    test('async/await', async () => {
        const r = await asyncFn()
        expect(r).toBe('Passes!')
    }, 7000)
})