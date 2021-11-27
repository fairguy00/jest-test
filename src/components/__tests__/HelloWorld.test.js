import { mount, shallowMount} from '@vue/test-utils'
import HelloWorld from '../HelloWorld'

// jest 는 vue component를 해석할수 없다
// 그러므로 Vue Test Utils 공식 라이브러리가 필요하다
// jest --watch 로 테스트
describe('HelloWorld Component', () => {
    // mount shallowMount 차이
    // shallowMount(얕은 마운트) - 얕게 연결해서 하위컴포넌트(렌더링된 결과라든지)들은 stub(가짜)처리를 해버린다

    test('mount', () => {
        const wrapper = mount(HelloWorld)
        console.log(wrapper.html())
        expect(wrapper.text()).toBe('Hello World!!')// 브라우저 렌더링된 텍스트만 추림
    })
    test('shallowMount', () => {
        const wrapper = shallowMount(HelloWorld)
        console.log(wrapper.html())
        expect(wrapper.text()).toBe('Hello')// 브라우저 렌더링된 텍스트만 추림
    })
})