<template>
	<div>
		<div>
			<h3>
				Edit a Post
			</h3>
			<input type="text" v-model="form.title">
			<br>
			{{posts[id].title}}
			<hr>
			<textarea type="text" v-model="form.description">
			</textarea>
			<br>
			{{posts[id].description}}
			<hr>
			<button @click='edit(id)'>Save</button>
		</div>
	</div>
</template>

<script type="text/javascript">
	import posts from '@/components/data'
	export default{
		data() {
			return{
				posts:posts.posts,
				id:this.$route.params.id,
				form:{
					title:"",
					description:""
				}
				
			}
		},
		methods:{
			edit(id){
				this.posts.splice(id,1,this.form)	
			},//to delete use splice(index,how many vars starting from tha index you would want to delete)
		}
	}
</script>