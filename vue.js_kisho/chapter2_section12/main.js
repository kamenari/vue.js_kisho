var app = new Vue({
  el: '#app',
  data: {
    url: 'url',
    message: 'テスト'
  }
})
// HTMLのコンパイルをスキップして静的なコンテンツとして描画


var app2 = new Vue ({
  el:'#app2',
  data: {
    url: 'test',
    message: 'テスト'
  }
})
// 初回のみdataを表示


var app3 = new Vue ({
  el:'#app3',
  data :{
    message: 'Hello vue.js'
  }
})
// 単一のマスタッシュのみで構成される場合、代わりにv-textでバインドできる


var app4 = new Vue ({
  el: '#app4',
  data: {
    message: 'Hello <strong>Vue.js</strong>'
  }
})
// htmlタグをそのまま描画させたい場合はv-htmlを使用する


var app5 = new Vue({
  el:'#app5',
  data: {
    message: 'フェードイン'
  }
})
