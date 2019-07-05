import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Sider from './sider'
import Toast from './toast'
import plugin from "./plugin";
import Tabs from "./tabs"
import TabsBody from "./tabs-body"
import TabsHead from "./tabs-head"
import TabsItem from "./tabs-item"
import TabsPane from "./tabs-pane"
import Popover from "./popover"
import Collapse from "./collapse"
import CollapseItem from "./collapse-item"


Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.component('g-popover',Popover)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-head',Header)
Vue.component('g-footer',Footer)
Vue.component('g-content',Content)
Vue.component('g-sider',Sider)
Vue.component('g-toast',Toast)
Vue.use(plugin)


new Vue ({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
        message:'hi',
        selectedTab:'sports'
    },

    methods:{
        showToast(){
            this.$toast('<a href="www.baidu.com">baidu</a>',{
                closeButton:{
                    text:'知道了',
                    callback(toasts){
                        toasts.log()
                        console.log('用户说他知道了')
                    }
                },
                autoClose:3,
                position:'center',
                enableHtml: true
            })
        }
    },
})




