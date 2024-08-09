const myData = {
    appName: "Oshshi Demo",
    currentPoint: "0",
    message: ""
}

const app = Vue.createApp({
    data(){
        return myData;
    },
    created(){
        console.log("created");
    },
    methods: {
        plus(){
            this.message = "1ポイント貯める";
            this.currentPoint ++;
        },
        minus(){
            this.message = "4ポイント使う";
            this.currentPoint -= 4;
        },
        moveRireki(){
            window.open("indexRireki.html");
        }
    }
});

app.mount("#app");