import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue ({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
    }
})



import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
// 单元测试
{
    // const可以把一个对象一个函数
    //下面这个方法就是动态生成一个按钮
    const Construstor = Vue.extend(Button)
    const vim = new Construstor({
        propsData:{
            icon:'setting'
        }
    })
    // $mount()可以把一个实例挂载到一个div上面
    //当然也可以不mount到元素里
    vim.$mount()
    let useElement = vim.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-setting')
    vim.$el.remove()
    vim.$destroy()
}

{
    //测试同时给loading和icon，会不会只出现loading
    const Construstor = Vue.extend(Button)
    const vim = new Construstor({
        propsData: {
            icon: 'setting',
            loading:true
        }
    })
    vim.$mount()
    let useElement = vim.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-loading')
    vim.$el.remove()
    vim.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Construstor = Vue.extend(Button)
    const vim = new Construstor({
        propsData: {
            icon: 'setting',
        }
    })
    vim.$mount(div)
    //这里如果mount没有传递参数，页面是不会渲染的
    //所以不会出现order
    let svg = vim.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal("1")
    vim.$el.remove()
    vim.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Construstor = Vue.extend(Button)
    const vim = new Construstor({
        propsData: {
            icon: 'setting',
            iconPosition:'right'
        }
    })
    vim.$mount(div)
    let svg = vim.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal("2")
    vim.$el.remove()
    vim.$destroy()
}

//触发click事件
//使用mock，来监听
{
    const Construstor = Vue.extend(Button)
    const vim = new Construstor({
        propsData: {
            icon: 'setting'
        }
    })
    vim.$mount()
    let spy = chai.spy(function () {})
    vim.$on('click',spy)
    let button = vim.$el
    button.click()
    expect(spy).to.have.been.called()
}
