const mutate = require('xtend/mutable')

module.exports = createModel

// module creation helper
// (str?) -> obj
function createModel (namespace) {
  const model = (namespace) ? { namespace: namespace } : {}
  model.models = {}
  model.reducers = {}
  model.effects = {}
  model.subscriptions = {}
  model.state = {}

  return {
    start: function () {
      return model
    },
    state: function (value) {
      mutate(model.state, value)
    },
    reducer: function (key, value) {
      model.reducers[key] = value
    },
    subscription: function (key, value) {
      model.subscriptions[key] = value
    },
    effect: function (key, value) {
      model.effects[key] = value
    }
  }
}
