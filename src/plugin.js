// import Toast from './toast'
// export default {
//     install(Vue,options) {
//         Vue.prototype.$toast = function (message) {
//             let Constructor = Vue.extend(Toast)
//             let toast = new Constructor()
//             toast.$slots.default = [message]
//             toast.$mount()
//             document.body.appendChild(toast.$el)
//         }
//     }
// }
import Toast from './toast'
let currentToast
export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message,toastoptions) {
            if (currentToast){
                currentToast.close()
            }
            currentToast =  createToast({Vue,message,propsDate:toastoptions})
        }
    }
}



/*help function*/



function createToast({Vue,message,propsDate}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor(
        /*读传入的propsDate*/
        // { propsDate:propsDate}
        /*两边一样的可以简写*/
        {propsDate}
        // {propsData: toastoptions}
    )
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}