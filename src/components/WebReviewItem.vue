<template>
  <div class="todo-list-item">
    <div class="list">
      <div v-if="editMode" class="todo-edit">
        <div class="index-column">{{ index + 1 }}.</div>

        <ApolloMutation
          :mutation="
            (gql) =>
              gql`
                mutation MyMutation($id: Int!, $list: String!) {
                  update_todoListTask_by_pk(
                    pk_columns: { id: $id }
                    _set: { list: $list }
                  ) {
                    id
                    list
                  }
                }
              `
          "
          :variables="{ id: todoItem.id, list: editedTodo }"
          :update="refetchQueriesSetelahMutation"
        >
          <template v-slot="{ mutate, error }">
            <input
              v-model="editedTodo"
              @keyup.enter="mutate()"
              type="text"
              class="edit-column"
            />

            <p v-if="error">There is an error: {{ error }}</p>
          </template>
        </ApolloMutation>
      </div>
      <div v-else class="todo">{{ index + 1 }}. {{ todoItem.list }}</div>

      <ApolloMutation
        :mutation="
          (gql) => gql`
            mutation DeleteTodo($id: Int!) {
              delete_todoListTask_by_pk(id: $id) {
                id
                list
              }
            }
          `
        "
        :variables="{ id: todoItem.id }"
        :update="refetchQueriesSetelahMutation"
      >
        <template v-slot="{ mutate, error }">
          <button @click="mutate()" class="action1">Delete</button>

          <p v-if="error">There is an error: {{ error }}</p>
        </template>
      </ApolloMutation>
      <button @click="editHandler" class="action2">Revised</button>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "WebReviewItem",
  props: {
    index: Number,
    todoItem: Object,
  },
  data() {
    return {
      editedTodo: "",
      editMode: false,
      isEmpty: false,
    };
  },
  mounted() {
    this.editedTodo = this.todoItem.body;
  },
  computed: {
    refetchQueriesAfterMyMutation() {
      return [
        {
          query: gql`
            query MyQuery {
              todoListTask {
                id
                list
              }
            }
          `,
        },
      ];
    },
  },
  methods: {
    changeEditMode() {
      this.editMode = !this.editMode;
    },
    editHandler() {
      this.editMode ? this.editTodo() : this.changeEditMode();
    },
    editTodo() {
      this.isEmpty = !this.editedTodo;
      if (!this.isEmpty) {
        this.$emit("edit-todo", this.todoItem.id, this.editedTodo);
        this.changeEditMode();
      }
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  margin: 20px 0;
  justify-content: center;
}

.todo {
  width: 80%;
}

.todo-edit {
  display: flex;
  width: 80%;
}

.index-column {
  width: 2%;
}

.edit-column {
  width: 98%;
}

.error-empty {
  color: red;
}

.action1 {
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.action2 {
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
