<template>
    <div class="textFiled">
      <input type="text" v-model="colorCode"/>
    </div>
</template>

<script>
    export default{
        computed:{
            colorCode:{
                get(val){
                    return this.$store.state.textColor
                },
                set(newValue) {
                    this.$store.dispatch('setTextColorAction',newValue)
                }
            }
        },
    }
</script>