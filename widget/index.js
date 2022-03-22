import testWidget from './test-widget'

const install = function (Vue) {
    Vue.component('test-widget', testWidget)
}

export default {
    install
}
