<template>
    <div class="animate">
        <div ref="animate" style="width: 100%;">
            xxxxxxxxx
        </div>
        <span @click="go" style="width: 50px; height: 50px; display: block;background-color: #fff;">go</span>
    </div>
</template>
<style>
    .animate {
        width: 200px;
        height: 200px;
    }
</style>
<script>
    export default {
        name: 'home',
        methods: {
            go: function () {
                this.$anime({
                    translateX: 250,
                    targets: this.$refs.animate,
                });
                setTimeout(() => this.$anime({
                    translateX: 100,
                    targets: this.$refs.animate,
                }), 1000);
            }
        }
    }
    // return new Promise((resolve) => {
    //     this.$anime({
    //         targets: this.$el,
    //         rotateY: [0, 360],
    //         duration: 100,
    //         easing: 'easeInOutQuart',
    //         complete: () => {
    //             this.$anime({
    //                 targets: this.$el,
    //                 rotateY: [0, 120],
    //                 complete: () => {
    //                     resolve(true)
    //                 }
    //             })
    //         }
    //     })
    // });
</script>
