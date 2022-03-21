<script>
import Vue from 'vue'

export default {
    name: 'render-widget-component',
    props: {
        widgetInfo: {
            type: Object,
            default: () => {
                return {
                    html: '<div></div>',
                    js: '',
                    css: ''
                }
            }
        }
    },
    data () {
        return {
            style: null
        }
    },
    watch: {
        widgetInfo: {
            deep: true,
            handler (n, o) {
                const { css } = n
                this.importCss(css)
            }
        }
    },
    methods: {
        importJs (js) {
            if (js) {
                return Function.call(this, `return {${js}}`)()
            } else {
                return {}
            }
        },
        importCss (css) {
            if (this.style) {
                this.style.parentNode.removeChild(this.style)
                this.style = null
            }
            if (!css) return
            this.style = document.createElement('style')
            this.style.type = 'text/css'
            this.style.rel = 'stylesheet'
            this.style.appendChild(document.createTextNode(this.handleCss(css)))
            const head = document.getElementsByTagName('head')[0]
            head.appendChild(this.style)
        },
        handleCss (css) {
            return css.replace(/[\r\n\s]/g, '')
                .replace(/};/g, '}')
                .split('}')
                .map(str => {
                    return str ? `.render-component ${str}` : ''
                }).join('}')
        }
    },
    render (h) {
        const { html, js } = this.widgetInfo
        try {
            const renderComponent = Vue.component('render-component', {
                template: `<div class="render-component">${html}</div>`,
                ...this.importJs(js)
            })
            return h(renderComponent)
        } catch (e) {
            console.log(e)
            return h()
        }
    }
}
</script>

<style scoped lang="scss">

</style>
