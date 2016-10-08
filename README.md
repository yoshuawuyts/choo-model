# choo-model [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

State management lib for choo :v:. Experiment for now. Might become part of
`choo` at some point, who knows.

## Usage
```js
const Model = require('choo-model')
const mount = require('choo/mount')
const html = require('choo/html')
const choo = require('choo')

const app = choo()

app.model(todosModel())
app.router(['/', mainView ])
mount('body', app.start())

function todosModel () {
  const model = Model('todos')
  model.state({ todos: [] })
  model.reducer('add', (state, data) => state.push({ text: data }))
  return model.start()
}

function mainView (state, prev, send) {
  return html`
    <body>
      <main><p>Todos: ${state.todos}</p></main>
    </body>
  `
}
```

## API
### model = Model(namespace?)
Create a new model instance

### model.start()
Return the `model` object, ready for the `app.model()` call.

### model.reducer(name, reducer)
Create a new reducer

### model.state(state)
Save new state. The resulting state is combined into a single state object
under the hood.

### model.subscription(name, subscription)
Create a new subscription

### model.effect(name, effect)
Create a new effect

### model.effect(name, effect)
Create a new effect

## Installation
```sh
$ npm install choo-model
```

## FAQ
### Why?
Because experimenting outside of core is the right way to do things.

### What can we expect to land in here?
Probably the ability to set constraints on `send()` calls so they can't access
everything. Also the ability to create graph data based on those constraints.
Perhaps selectors too. Y'know, basic stuff.

### Why aren't you doing X first?
Having a solid story for state management is quite important. Some abstractions
start to break down once apps grow; we're hitting that point. Everything else
is irrelevant if we can't scale and use it ourselves on real projects.

### How can I contribute?
Try it out. Build things on top of it. Build out alternatives.

### Is this optimizable?
Yeah, definitely - if this ever makes the cut we can statically analyze the
code and precompile the result so it'll have no overhead at runtime. Yay!

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/choo-model.svg?style=flat-square
[3]: https://npmjs.org/package/choo-model
[4]: https://img.shields.io/travis/yoshuawuyts/choo-model/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/choo-model
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/choo-model/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/choo-model
[8]: http://img.shields.io/npm/dm/choo-model.svg?style=flat-square
[9]: https://npmjs.org/package/choo-model
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
