<template>
    <div class="main-container">
        <div class="edit-box">
            <div class="edit-header">
                <p>render</p>
                <button @click="renderComponent">render</button>
            </div>
            <div class="render-box">
                <render-widget-component :widget-info="widgetInfo"></render-widget-component>
            </div>
        </div>
        <div class="edit-box">
            <div class="edit-header">
                <p>html</p>
            </div>
            <textarea class="html-box" v-model="htmlCode"></textarea>
        </div>
        <div class="edit-box">
            <div class="edit-header">
                <p>javascript</p>
            </div>
            <textarea class="js-box" v-model="jsCode"></textarea>
        </div>
        <div class="edit-box">
            <div class="edit-header">
                <p>css</p>
            </div>
            <textarea class="css-box" v-model="cssCode"></textarea>
        </div>
    </div>
</template>

<script>
import RenderWidgetComponent from '../components/render-widget-component'

export default {
    name: 'index',
    components: { RenderWidgetComponent },
    data () {
        return {
            widgetInfo: undefined,
            htmlCode: '<div class="text">{{value}}</div>\n<button class="text2" @click="value++">click</button>',
            jsCode: 'data () {return {value: 1}},\ncreated () {console.log(\'created\')}',
            cssCode: '.text {color: red}\n.text2 {color: blue}'
        }
    },
    methods: {
        renderComponent () {
            this.widgetInfo = {
                html: this.htmlCode,
                js: this.jsCode,
                css: this.cssCode
            }
        }
    }
}
</script>

<style scoped lang="scss">
.main-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    overflow: hidden;
    .edit-box {
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        .edit-header {
            display: flex;
        }
        .render-box {
            width: 100%;
            height: 100%;
        }
        textarea {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
