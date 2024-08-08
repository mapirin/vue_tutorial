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
            this.message = "OsushiPoint plus 1";
            this.currentPoint ++;
        },
        minus(){
            this.message = "OsushiPoint minus 4";
            this.currentPoint -= 4;
        },
        moveRireki(){
            window.open("indexRireki.html");
        },
        moveHome(){
            window.close("indexRireki.html");
        }
    }
});

app.mount("#app");