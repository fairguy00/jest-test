<template>
    <div>
        {{todo.title}}
    </div>
</template>
<script>
import axios from 'axios'

export default {
    // Mock - 모의
    // Mocking  위한 컴포넌트 생성
    data(){
        return{
            todo:{}
        }
    },
    created() {
        this.fetchTodo()
    },
    methods:{
        async fetchTodo(){
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            
            this.todo = data
        }
    }
}
</script>