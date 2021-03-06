const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Popover).to.be.exist
    })
    it('可以设置position', (done) => {
        Vue.component('g-popover',Popover)
        const div =document.createElement('div')
        document.body.appendChild(div)
        // language=HTML
        div.innerHTML =`
            <g-popover position="bottom" ref="a">
                <template slot="content">
                    <div>内容</div>
                </template>
                <button>点我</button>
            </g-popover>
        `
        const vm = new Vue({
            el:div
        })

        vm.$nextTick(()=>{
            vm.$el.querySelector('button').click()
            vm.$nextTick(()=>{
                // console.log(vm.$refs.a.$refs.contentWrapper.outerHTML);

                expect
                (vm.$refs.a.$refs.contentWrapper.classList.contains('position-bottom'))
                    .to.be.true
                done()
            })
        })
    })

})