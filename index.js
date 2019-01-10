var app = new Vue({ 
    el: '#app',
    data: {
        a: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: false
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
})



Vue.component('do-item', {
    // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
    // このプロパティは todo と呼ばれます。
    props: ['do'],
    template: '<li>{{ do.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})


// データオブジェクト
var data = { a: 1 ,b: '2'}
var data1 = { a: 2 }
console.log(data);

// Vue インスタンスにオブジェクトを追加する
var vm = new Vue({
  el: '#ex-1',
  data: data,
})

console.log(vm.b);
console.log(data.a);

// インスタンスのプロパティを取得すると、
// 元のデータからそのプロパティが返されます
vm.a == data.a // => true

// プロパティへの代入は、元のデータにも反映されます
// vm.a = 2
// data.a // => 2

// // ... そして、その逆もまたしかりです
// data.a = 3
// vm.a // => 3

/**                    **/
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch はインスタンスメソッドです
vm.$watch('a', function (newValue, oldValue) {
   // このコールバックは `vm.a` の値が変わる時に呼ばれます
})