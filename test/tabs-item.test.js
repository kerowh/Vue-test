const expect = chai.expect;
import Vue from 'vue'
import Tabs from "../src/tabs"
import TabsBody from "../src/tabs-body"
import TabsHead from "../src/tabs-head"
import TabsItem from "../src/tabs-item"
import TabsPane from "../src/tabs-pane"

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(TabsItem).to.be.exist
    })

    it('接受name属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name:'xxx'
            }
        }).$mount(div)
        const item = vm.$el
        /*如果希望测试props中注入的属性，可以使用原生js的getAttribute来测试*/
        expect(item.getAttribute('data-name')).to.eq('xxx')

    })

    it('接受diaabled属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name:'xxx',
                disabled:true
            }
        }).$mount(div)
        const item = vm.$el
        /*如果希望测试props中注入的属性，可以使用原生js的getAttribute来测试*/
        expect(item.classList.contains('disabled')).to.be.true
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })



})