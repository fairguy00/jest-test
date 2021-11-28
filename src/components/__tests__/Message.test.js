import { shallowMount } from '@vue/test-utils'
import Message from '../Message'

describe('Message Component', () => {
    // test('1', () => {
    //     const wrapper = shallowMount(Message, {
    //         propsData: {
    //             msg: 'World'
    //         }
    //     })
    //     // vm 은 컴포넌트 자체
    //     expect(wrapper.vm.msg).toBe('World')
    //     // wrapper.element 는 template 제외한 루트엘리먼트를 칭함 여기는 span
    //     expect(wrapper.element.tagName).toBe('SPAN')
    //     expect(wrapper.attributes().class).toBe('msg')
    //     expect(wrapper.attributes().class).toBe('msg')
    // })

    test('2', () => {
        const wrapper = shallowMount(Message)
        // wrapperArray 는 배열이 아니라 객체data
        const wrapperArray = wrapper.findAll('div > *')

        //expect(wrapperArray.length).toBe(3)
        expect(wrapperArray.at(1).text()).toBe('1')// 태그안 숫자는 문자로 취급
    })
})