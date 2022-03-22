<template>
    <div>{{text}}</div>
</template>

<script>
export default {
    name: 'test-widget',
    props: {
        text: {
            type: String,
            default: 'This is a test widget!'
        }
    }
}
</script>

<style scoped lang="scss">

</style>
