var app = new Vue({
    el: '#app',
    data: {
        n: 0
    },
    methods: {
        countUp: function(comment){
            this.n += 1
            alert(comment)
        }
    }
})