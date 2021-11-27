import { shallowMount } from '@vue/test-utils'
import Message from '../Message'

describe('Message Component', () => {
    test('1', () => {
        const wrapper = shallowMount(Message, {
            propsData: {
                msg: 'World'
            }
        })
        // vm 은 컴포넌트 자체
        expect(wrapper.vm.msg).toBe('World')
        // wrapper.element 는 template 제외한 루트엘리먼트를 칭함 여기는 span
        expect(wrapper.element.tagName).toBe('SPAN')
    })
})