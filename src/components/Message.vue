<template>
    <span>{{msg}}</span>
</template>

<script>
export default {
    props:{
        msg: String
    },
    // created(){
    //     this.msg// created를 통해 msg 접근가능하다
    // }
}
</script>