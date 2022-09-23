<template>
  <div>
    <input type="text" v-if="type === 'text'" v-model="localValue" />
    <div v-if="type === 'checkbox'">
      <div v-for="(item, i) in localList" :key="i">
        <label
          ><input
            type="text"
            class="label_text"
            :value="item"
            @input="changeModel(i, $event)"
        /></label>
        <input :value="item" type="checkbox" v-model="localValue" />
      </div>
    </div>
    <div v-if="type === 'radio'">
      <div v-for="(item, i) in localList" :key="i">
        <label
          ><input
            type="text"
            class="label_text"
            :value="item"
            @input="changeModel(i, $event)"
        /></label>
        <input
          :name="`group_${position}`"
          :value="item"
          type="radio"
          v-model="localValue"
        />
      </div>
    </div>
    <textarea v-if="type === 'textarea'" v-model="localValue" />
    <div v-if="type === 'select'">
      <select v-model="localValue">
        <option v-for="item in localList" :key="item">
          {{ item }}
        </option>
      </select>
      <div v-for="(option, i) in localList" :key="i">
        <input
          type="text"
          class="option_input"
          :value="option"
          @input="changeModel(i, $event)"
        />
        <button class="option_button" @click="deleteOption(i)">✖</button>
      </div>
    </div>
    <input type="date" v-if="type === 'date'" v-model="localValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "FormItem",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String || Boolean || Array,
      default: "text",
    },
    list: {
      type: Array as PropType<string[]>,
      default: () => {
        return [];
      },
    },
    position: {
      type: Number || String,
    },
  },
  emits: ["change", "changeList"],
  data() {
    return { localValue: {}, localList: Array as unknown as string[] };
  },
  mounted() {
    this.localList = this.list;
    if (this.type == "checkbox" && typeof this.value === "string") {
      this.localValue = [];
    } else if (this.type == "select") {
      this.localValue = this.localList[0];
    } else {
      this.localValue = this.value;
    }
  },
  methods: {
    changeModel(index: number, event: Event) {
      if (this.localList) {
        this.localList[index] = (event?.target as HTMLInputElement).value;
      }
    },
    deleteOption(index: number) {
      this.localList.splice(index, 1);
    },
  },
  watch: {
    localValue() {
      this.$emit("change", this.localValue);
    },
    value() {
      this.localValue = this.value;
    },
    localList() {
      this.$emit("changeList", this.localList);
    },
    list() {
      this.localList = this.list;
    },
  },
});
</script>

<style scoped>
.option_button {
  border: none;
  background: none;
}
.label_text,
.option_input {
  border: 0;
  width: 100px;
}
</style>
