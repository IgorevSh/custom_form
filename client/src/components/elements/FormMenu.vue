<template>
  <button class="open_button" @click="hidden = !hidden">➕</button>
  <div class="drop_menu" v-if="!hidden">
    <button class="close_button" @click="hidden = !hidden">✖</button>
    <div class="required_wrapper">
      <label>required</label><input type="checkbox" v-model="localRequired" />
    </div>
    <div
      class="item_menu"
      v-for="type in types"
      :key="type"
      @click="changeType(type)"
    >
      {{ type }}
    </div>
    <button
      @click="addOption()"
      v-if="type == 'select' || type == 'radio' || type == 'checkbox'"
      class="menu_button"
    >
      Добавить
    </button>
    <button class="menu_button" @click="deleteItem">Удалить</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormMenu",
  props: {
    type: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["changeType", "delete", "addOption", "changeRequired"],
  data() {
    return {
      types: ["text", "textarea", "select", "radio", "checkbox", "date"],
      localRequired: false,
      hidden: true,
    };
  },
  created() {
    this.localRequired = this.required;
  },
  methods: {
    changeType(type: string) {
      this.$emit("changeType", type);
    },
    deleteItem() {
      this.$emit("delete");
    },
    addOption() {
      this.$emit("addOption");
    },
  },
  watch: {
    localRequired() {
      this.$emit("changeRequired", this.localRequired);
    },
    required() {
      this.localRequired = this.required;
    },
  },
});
</script>

<style scoped>
.menu_button {
  border-radius: 15px;
  padding: 5px 15px;
  background-color: purple;
  color: white;
  font-weight: 700;
  border: none;
}
.item_menu:hover {
  cursor: pointer;
  background-color: #cfcfcf;
}
.required_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.drop_menu {
  border: 2px solid black;
  width: 200px;
  margin-left: 450px;
  position: absolute;
  background-color: white;
  border-radius: 15px;
}
button {
  max-width: 100px;
  max-height: 25px;
}
.open_button,
.close_button {
  border: 0;
  color: black;
  background: none;
}
.close_button {
  position: absolute;
  right: 5px;
}
</style>
