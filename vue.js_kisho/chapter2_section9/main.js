var app = new Vue({
  el: '#app',
  data: {
    ok: false
  }
})
//テンプレートにおける条件分岐


new Vue({
  el: '#app2',
  data: {
    ok: false
  }
})
// templateタグで要素全体を囲う


new Vue({
  el: '#app3',
  data: {
    type: 'A'
  }
})
// v-else-if、v-elseによるグループ化


new Vue({
  el:'#app4',
  data: {
    loaded: false
  }
})
// keyをつけて違う要素だと明示的にする
