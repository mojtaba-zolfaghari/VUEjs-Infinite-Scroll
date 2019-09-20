new Vue({
  el: "#app",
  data: {
    posts: [],
    limit: 1,
    busy: false
  },
  methods: {
    loadMore() {
      console.log("Adding 10 more data results");
      this.busy = true;
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        const append = response.data.slice(
          this.posts.length,
          this.posts.length + this.limit
        );
        this.posts = this.posts.concat(append);
        this.busy = false;
      });
    }
  },
  created() {
    this.loadMore();
  }
});
AOS.init();