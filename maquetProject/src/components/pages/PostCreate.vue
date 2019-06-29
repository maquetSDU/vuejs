<template>
	<div>
		<div>
			<h3>
				Add a Post
			</h3>
			<input type="text" v-model="form.title">Title
			<hr>
			<textarea type="text" v-model="form.description">
			</textarea>
			Description
			<hr>
			<button @click='add'>ADD</button>
		</div>
	</div>
</template>

<script type="text/javascript">
	import posts from '@/components/data'
	export default{
		data() {
			return{
				posts,
				form:{
					title:"",
					description:""
				}
			}
		},
		methods:{
			add(){
				this.posts.posts.push(this.form)	
			},//to delete use splice(index,how many vars starting from tha index you would want to delete)
		}
	}
</script>