<template>
	<div>
		<h1>{{posts[id].title}}</h1>
		<hr>
		{{posts[id].description}}
		<hr>
	</div>
</template>
<script type="text/javascript">
	import posts from'@/components/data'
	export default{
		data(){
			return {
				posts:posts.posts,
				id:this.$route.params.id
			}
		}
	}
</script>