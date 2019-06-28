const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

    it('存在.', () => {
        expect(Row).to.be.exist
    })
    it('接受gutter属性.', (done) => {
        Vue.component('g-row',Row)
        Vue.component('g-col',Col)
        const div =document.createElement('div')
        document.body.appendChild(div)
        // language=HTML
        div.innerHTML =`
            <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
        `

        const vm = new Vue({
            el:div
        })

        setTimeout(()=>{
            const  cols = vm.$el.querySelectorAll('.col')
            const  row = vm.$el.querySelector('.row')
            const rowleft = getComputedStyle(row).marginLeft
            const rowright = getComputedStyle(row).marginRight
            const left = getComputedStyle(cols[0]).paddingRight
            const right = getComputedStyle(cols[1]).paddingRight
            expect(left).to.eq('10px')
            expect(right).to.eq('10px')
            expect(rowleft).to.eq('-10px')
            expect(rowright).to.eq('-10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        },0)
    })

    it('接受align属性', () => {
        const div =document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align:'center'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.eq('center')
        vm.$el.remove()
        vm.$destroy()
    })
})