var app = new Vue({
  el: '#app',
  methods: {
    handleClick: function() {
      alert('クリックしたよ')
    }
  }
})
// メソッドイベントハンドラ


var app2 = new Vue({
  el: '#app2',
  data: {
    count:''
  }
})
// インラインメソッドハンドラ


var app3 = new Vue({
  el:'#app3',
  data: {
    show: false
  }
})
// 画像のロードイベントハンドル
