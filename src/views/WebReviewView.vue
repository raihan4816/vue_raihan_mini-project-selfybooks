<template>
  <div class="home">
    <div class="card border-dark mt-3" style="width: 100%">
      <div class="card-body text-dark">
        <h5 class="card-title text-center">Your Thoughts About The Website</h5>
        <div class="card-text">
          <div>
            <ApolloQuery
              :query="
                (gql) => gql`
                  query MyQuery {
                    todoListTask {
                      id
                      list
                    }
                  }
                `
              "
            >
              <template v-slot="{ result: { loading, error, data } }">
                <!-- Loading Handling -->
                <div v-if="loading" class="apollo">Loading, Please Wait...</div>

                <!-- Error Handling -->
                <div v-else-if="error" class="apollo">
                  There is an error
                  {{ error }}
                </div>

                <!-- Result -->
                <div v-else-if="data" class="apollo-result">
                  <WebReviewItem
                    v-for="(todoItem, index) in data.todoListTask"
                    :key="todoItem.id"
                    :index="index"
                    :todo-item="todoItem"
                    @edit-todo="editTodo"
                    @delete-todo="deleteTodo"
                  />
                </div>

                <!-- No result -->
                <div v-else class="apollo">
                  No Result Found, Searching On the Data :)
                </div>
              </template>

              <ApolloSubscribeToMore
                :document="
                  (gql) => gql`
                    subscription MySubscription {
                      todoListTask {
                        id
                        list
                      }
                    }
                  `
                "
                :updateQuery="onUpdated"
              />
            </ApolloQuery>

            <ApolloMutation
              :mutation="
                (gql) => gql`
                  mutation MyMutation($object: todoListTask_insert_input = {}) {
                    insert_todoListTask_one(object: $object) {
                      id
                      list
                    }
                  }
                `
              "
              :variables="{ object: { list: todo } }"
            >
              <template v-slot="{ mutate, error }">
                <div class="input">
                  <input type="text" name="todo" v-model="todo" />
                  <input type="button" @click="mutate()" value="Comment" />

                  <p v-if="error">There is an error: {{ error }}</p>
                </div>
              </template>
            </ApolloMutation>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebReviewItem from "@/components/WebReviewItem.vue";

export default {
  name: "WebReviewView",
  components: {
    WebReviewItem,
  },
  data() {
    return {
      todo: "",
      todos: [],
      isEmpty: false,
    };
  },
  computed: {
    todosLength() {
      return this.todos.length;
    },
  },
  methods: {
    onUpdated(previousResult, { subscriptionData }) {
      return {
        todoListTask: subscriptionData.data.todoListTask,
      };
    },
    addTodo() {
      this.todos.push({
        list: this.todo,
      });
    },
    editTodo(todoId, todoBody) {
      this.todos = this.todos.map((todo) =>
        todo.id === todoId ? { ...todo, list: todoBody } : todo
      );
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
  },
};
</script>

<style>
.home {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
}

.title {
  text-align: center;
  justify-content: center;
  color: rgb(59, 59, 59);
}

.status {
  text-align: center;
  justify-content: center;
}

.input {
  text-align: center;
  justify-content: center;
}

.apollo {
  text-align: center;
  justify-content: center;
}
</style>
