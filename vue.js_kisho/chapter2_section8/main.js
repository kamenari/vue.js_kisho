// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Vue.js!'
//   }
// })
//テキストのデータバインティング


// new Vue({
//   el: '#app',
//   data: {
//     //オブジェクト
//     message: {
//       value: 'Hello vue.js!'
//     },
//     //配列データ
//     list: ['りんご', 'ばなな', 'いちご'],
//     // 別のデータを使用してlistから取り出す要素を動的に
//     num: 1
//   }
// })


// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'vue.js!'
//   }
// })
//マスタッシュ({{message}}のような)にもjsの式が記述できる。


new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js',
    scroll: 0
  },
  mounted: function() {
    this.scroll = 100 //要素のスクロール量を操作
  }
})
//v-bildの修飾子


new Vue({
  el: '#app2',
  data: {
    count: 0
  },
  methods: {
    increment: function() { //ボタンをクリックしたときのハンドラ
      this.count+=1
    }
  }
})


new Vue({
  el: '#app3',
  data: {
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray'
  }
})
//クラス、スタイルのデータバインティング


new Vue({
  el:'#app4',
  data: {
    isChild: true,
    isActive: true,
    textColor: 'red'
  }
})
//既存の属性と併用した場合、上書きまたはマージされる


new Vue({
  el:'#app5',
  data: {
    isActive: false
  }
})
//項演算子を使う場合は配列リテラルで記述する


new Vue({
  el: '#app6',
  data: {
    classObject: {
      child: true,
      'is-active': false
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    }
  }
})
//オブジェクトとしてクラス、スタイルを渡す


new Vue({
  el: '#app7',
  data: {
    item: {
      id:1,
      src: 'item1.jpg',
      alt: '商品1サムネイル',
      widht: 200,
      height: 200,
      bacgroundColor: 'black'
    }
  }
})
//複数の属性のデータバインティング


new Vue({
  el: '#app8',
  data: {
    radius: 50
  }
})
//svgのデータバインティング
