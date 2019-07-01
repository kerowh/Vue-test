const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.exist
    })
    describe('props', () => {
        it('接受autoClose', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose:1
                }
            }).$mount(div)
            vm.$on('close',function () {
                expect(document.body.contains(vm.$el)).to.eq(false)
            })
        })
         it('接受closeButton', () => {
             const callback = sinon.fake();
             const Constructor = Vue.extend(Toast)
             const vm = new Constructor({
                 propsData: {
                     closeButton:{
                         text:'关闭',
                         callback,
                     }
                 }
             }).$mount()
             let closeButton = vm.$el.querySelector('.close')
             expect(closeButton.textContent.trim()).to.eq('关闭')
             closeButton.click()
             expect(callback).to.have.been.called
         })

        it('接受enableHTML', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    enableHtml:true
                }
            })
            vm.$slots.default=['<strong id="hi">hi</strong>']
            vm.$mount()
            let strong =vm.$el.querySelector('#hi')
            expect(strong).to.exist
        })

        it('接受autoClose', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position:'top'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-top')).to.eq(true)
        })
    })

})
