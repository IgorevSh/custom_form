<template>
  <div class="form_list_item">
    <div class="date_header">
      <span>{{ date }}</span>
    </div>
    <h3 class="form_list_title">{{ content.title }}</h3>
    <div class="form_list_description">{{ content.description }}</div>
    <div class="form_list_action">
      <router-link :to="`/settings/${id}`"
        ><button>Редактировать</button></router-link
      >
      <button @click="deleteForm()">Удалить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormListItem",
  props: {
    content: {
      type: Object,
    },
    id: {
      type: String,
    },
  },
  emits: ["deleteForm"],
  computed: {
    date() {
      return this.formatDate(new Date(parseInt(this.id || "0")));
    },
  },
  methods: {
    to2Digits(num: number) {
      return num.toString().padStart(2, "0");
    },

    formatDate(date: Date) {
      return [
        this.to2Digits(date.getDate()),
        this.to2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join(".") /* +
        " " +
        [
          this.to2Digits(date.getHours()),
          this.to2Digits(date.getMinutes()),
          this.to2Digits(date.getSeconds()),
        ].join(":")*/;
    },
    deleteForm() {
      this.$emit("deleteForm");
    },
  },
});
</script>

<style scoped>
.date_header {
  text-align: right;
  font-size: 14px;
}
.form_list_item {
  border: 2px solid black;
  max-width: 500px;
  margin: 15px auto;
  padding: 30px 15px;
  background-color: white;
  border-radius: 10px;
}
.form_list_title,
.form_list_description {
  margin: 10px 0;
}
.form_list_description {
  min-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.form_list_action button {
  background-color: purple;
  color: white;
  margin: 0 10px;
  border: 0;
  padding: 5px 15px;
  border-radius: 15px;
}
</style>
