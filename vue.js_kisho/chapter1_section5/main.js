var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js!'
  }
})


var app2 = new Vue({
  el: '#app2',
  data: {
    list: ['りんご', 'ばなな', 'いちご',]
  }
})


var app3 = new Vue({
  el: '#app3',
  methods:{
    handClick: function(event) {
      alert(event.target)
    }
  }
})


var app4 = new Vue({
  el: '#app4',
  data: {
    message: '初期メッセージ'
  }
})


var app5 = new Vue({
  el: '#app5',
  data: {
    show: true
  }
})


var app6 = new Vue({
  el: '#app6',
  data: {
    show: true
  }
})
