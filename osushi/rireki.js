const myData = {
    appName: "Oshshi Demo Rireki",
    rirekiMap: [
        {id:"id", text:"番号"},
        {id:"type", text:"タイプ"},
        {id:"date", text:"日付"}
    ],
    rirekiData: [
        {id:"5", type:"つかう", date: "2020/1/4"},
        {id:"4", type:"ためる", date: "2020/1/4"},
        {id:"3", type:"ためる", date: "2020/1/3"},
        {id:"2", type:"ためる", date: "2020/1/2"},
        {id:"1", type:"ためる", date: "2020/1/1"}
    ]
}

const app = Vue.createApp({
    data(){
        return myData;
    },
    created(){
        console.log("created");
    },
    methods: {
        moveHome(){
            window.close("indexRireki.html");
        }
    },
    computed: {
        getRirekiMap(){
            return this.rirekiMap;
        },
        getRirekiData(){
            return this.rirekiData;
        }
    }
});

app.mount("#rireki");