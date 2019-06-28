const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Col).to.be.exist
    })
    it('存在span.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span:1
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })

    it('存在offset', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset:1
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })

    it('存在pc属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad:{span:12,offset:1}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-ipad-12')).to.eq(true)
        expect(element.classList.contains('offset-ipad-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
})