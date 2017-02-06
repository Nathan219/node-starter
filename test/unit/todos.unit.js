'use strict';
const todos = require('../../todos');
const sinon = require('sinon');
const mongoose = require('mongoose');

describe('todos', function () {
  let Todo;

  beforeEach(() => {
    Todo = mongoose.model('Todo');
    sinon.stub(Todo, "find").yields(null, []);
  });

  it('all should return all', function() {
    let response = {send : () => {}};

    sinon.stub(response, "send");

    todos.all({}, response);

    sinon.assert.calledOnce(response.send);
  });
});
