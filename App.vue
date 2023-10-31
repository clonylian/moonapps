<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */

	.uni-tabbar{
		padding: 0.5rem 0.25rem 0.5rem!important;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		background: rgb(21, 22, 26) !important;
		overflow: hidden;
	}
</style>
