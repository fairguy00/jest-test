import { shallowMount } from '@vue/test-utils'
import TodoTitle from '../TodoTitle'
import axios from 'axios'

jest.mock('axios') // Mock Module

describe('TodoTitle Component', () => {
    let wrapper // 외부연동이 테스트에 포함되어 있으면 테스트 요인이 하나 더 포함되기때문에 좋지 않다
    beforeEach(() => { // 테스트들이 전역적으로 영향받을 수 있으므로 hook 사용
        const res = {
            data: {
                title: 'delectus aut autem'
            }
        }

        // axios.get = jest.fn(() => { // jest(전역함수) 에 모의 함수를 할당한다 ---> Mocking
        //     return new Promise(resolve => {
        //         resolve(res)
        //     })
        // })
        //axios.get = jest.fn().mockResolvedValue(res) // 위코드를 간소화할수 있다 
        axios.get.mockResolvedValue(res)// Mock Module 있으면 jest.fn()없이 바로 접근가능하다

        wrapper = shallowMount(TodoTitle)

    })
    test('가져온 텍스트 렌더링', (done) => { // done() 인수를 사용하여 비동기처리 done이 호출되면 테스트 함수종료
        setTimeout(() => {
            expect(wrapper.text()).toBe('delectus aut autem')
            done()
            // 외부연동이 테스트에 포함되어 있으면 테스트 요인이 하나 더 포함되기때문에 좋지 않다
        }, 100)
    })
    test('호출여부', () => {
        // expect(axios.get).toHaveBeenCalled()// 호출이 되었었는지
        // expect(axios.get).toHaveBeenCalledTimes(2)// 호출횟수
        const spy = jest.spyOn(wrapper.vm, 'fetchTodo')
        wrapper.vm.fetchTodo()
        expect(spy).toHaveBeenCalled()
        // expect(wrapper.vm.fetchTodo).toHaveBeenCalled()// 감시대상이 아니기때문에 jest.spyOn(스파이를심을 메서드를 포함하는 객체, 메서드이름)이 필요하다
    })
})