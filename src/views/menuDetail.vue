<template>
    <div class="menuDetail">
        <navTop2></navTop2>
        <div class="detail_box">
            <menuLeft :mid="mid"></menuLeft>
            <menuRecom></menuRecom>
        </div>
        <bottom></bottom>
    </div>
</template>
<script>
import navTop2 from '@/components/navTop2.vue';
import bottom from '@/components/bottom.vue';
import menuLeft from '@/components/detail/menuLeft.vue';
import menuRecom from '@/components/detail/menuRecom.vue';

export default {
    components:{navTop2,bottom,menuLeft,menuRecom},
    props:{mid:""},
    data(){
        return{}
    },
    methods:{}
}
</script>
<style scoped>
    .detail_box{max-width: 1100px;margin:0 auto;display: flex;justify-content: space-between;margin-bottom: 30px;}
</style>
