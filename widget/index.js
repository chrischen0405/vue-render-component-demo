const install = function (Vue) {
    const requireComponents = require.context('./', false, /\.vue$/)
    requireComponents.keys().forEach(fileName => {
        const reqCom = requireComponents(fileName)
        const reqComName = reqCom.default.name || fileName.replace(/\.\/(.*)\.vue/, '$1')
        Vue.component(reqComName, reqCom.default || reqCom)
    })
}

export default {
    install
}
