
import Toast from './toast'
let currentToast
export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message,toastoptions) {
            if (currentToast){
                currentToast.close()
            }
            currentToast =  createToast({Vue,
                message,
                toastoptions,
                onClose:()=>{
                    currentToast = null
                }
            })
        }

    }
}


/*help function*/
function createToast({Vue,message,toastoptions,onClose}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor(
        {propsData: toastoptions}
    )
    toast.$slots.default = [message]
    toast.$on('close',onClose)
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}