const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.exist
    })

    describe('props',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        // beforeEach(function () {
        //     //每次运行测试用例都先运行构造函数，这样我们就不用每次都写了
        //     //但是这个constructor的作用域在函数内，下面调不到了
        //     //所以把这个放在外面做一个全局变量
        //     const Constructor = Vue.extend(Input)
        // })
        afterEach(function () {
            //这里是一个问题
            vm.$destroy()
        })
        it('接受value', () => {
            // const Constructor = Vue.extend(Input)
             vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
            // vm.$destroy()
        })
        it('接受disabled', () => {
            // const Constructor = Vue.extend(Input)
             vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
            // vm.$destroy()
        })
        it('接受readonly', () => {
            // const Constructor = Vue.extend(Input)
             vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            // 这里的readOnly要大写才有用
            // vm.$destroy()
        })

        it('接受error', () => {
            // const Constructor = Vue.extend(Input)
             vm = new Constructor({
                propsData: {
                    error:'你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
            // vm.$destroy()
        })
    })
    describe('事件',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('支持change/input/focus/blus事件',()=>{
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                //怎么触发change事件
                //dispatchEvent向一个指定的事件目标派发一个事件，
                // 以合适的顺序触发受影响的事件。具体用法如下
                let event = new Event(eventName)
                //这一句的意思是把event.target.value改成一个可以修改的属性
                //如果只是使用event.target = hi,是会报错的，
                // 因为event.target是一个只读属性，无法进行修改
                Object.defineProperty(
                    event,'target',{
                        value:{value:'hi'},enumerable:true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                //还需要预测传入的第一个参数是不是event，使用calledWith
                //这里是通过查询chai-sinon的api解决的.
                expect(callback).to.have.been.calledWith('hi')
            })
        })
        // it('支持input事件',()=>{
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('input', callback)
        //     //怎么触发change事件
        //     //dispatchEvent向一个指定的事件目标派发一个事件，
        //     // 以合适的顺序触发受影响的事件。具体用法如下
        //     let event = new Event('input')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     //还需要预测传入的第一个参数是不是event，使用calledWith
        //     //这里是通过查询chai-sinon的api解决的.
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持focus事件',()=>{
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('focus', callback)
        //     //怎么触发change事件
        //     //dispatchEvent向一个指定的事件目标派发一个事件，
        //     // 以合适的顺序触发受影响的事件。具体用法如下
        //     let event = new Event('focus')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     //还需要预测传入的第一个参数是不是event，使用calledWith
        //     //这里是通过查询chai-sinon的api解决的.
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持blur事件',()=>{
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('blur', callback)
        //     //怎么触发change事件
        //     //dispatchEvent向一个指定的事件目标派发一个事件，
        //     // 以合适的顺序触发受影响的事件。具体用法如下
        //     let event = new Event('blur')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     //还需要预测传入的第一个参数是不是event，使用calledWith
        //     //这里是通过查询chai-sinon的api解决的.
        //     expect(callback).to.have.been.calledWith(event)
        // })
    })
})