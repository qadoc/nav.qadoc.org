// register the bookmark-panel component
Vue.component('bookmark-panel', {
	props: {
		id: String,
		group: Object,
		bookmarks: Array
	},
    template: '#bookmark-panel-template'
    // data: function(){
    // 	return {
    // 		book:'SoapUI'
    // 	}
    // }
});