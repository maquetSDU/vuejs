<template>
	<div>
		<div class="box" :class="{ 'done': 	post.done }" v-for='(post,id) in posts.posts'>
            <h3>{{ post.title }} </h3>
            <button class="btn" @click='post.done = !post.done'>{{ (post.done) ? 'Unmark' : 'Mark as Done'  }}</button>
            <router-link class="btn"  :to="{ name:'info', params: {id:id}}"  tag="button">View Post</router-link>
            <button class="btn" @click='tidy(id)'>Delete</button>
            <router-link class="btn"  :to="{ name:'edit', params: {id:id}}"  tag="button">Edit</router-link>
        </div>
	</div>
</template>
<script type="text/javascript">
	import posts from '@/components/data'
	export default{ 
		data(){
			return{
				posts
			}
		},
	    methods:{
		    goToLink(link) {
		    	this.$router.push({ name: link.name })
		    },
		    tidy(id){
		    	posts.posts.splice(id,1)
		    }
	    }
    }   
</script>