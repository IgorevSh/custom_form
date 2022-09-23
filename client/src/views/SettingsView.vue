<template>
  <div class="settings_page">
    <div class="back_link"><router-link to="/">НАЗАД</router-link></div>
    <div class="settings_wrapper">
      <h1><input type="text" class="text_header" v-model="list.title" /></h1>
      <textarea
        type="text"
        class="text_description"
        v-model="list.description"
      ></textarea>
      <button class="settings_button" @click="addField()">Добавить</button>
      <div
        v-for="(form, i) in list.content"
        :key="form.type + i"
        class="input_wrapper"
      >
        <FormItem
          :type="form.type"
          :value="form.value"
          :required="form.required"
          :list="form.list"
          :position="i"
          @change="changeValue(i, $event)"
          @changeList="form.list = $event"
        ></FormItem>
        <FormMenu
          @delete="removeField(i)"
          :type="form.type"
          :required="form.required"
          @changeRequired="form.required = $event"
          @changeType="changeType($event, i)"
          @addOption="addOption(i)"
        />
      </div>
      <button class="settings_button" @click="saveForm()">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, PropType } from "vue";
import FormModel from "@/models/FormModel";
import FormItem from "@/components/elements/FormItem.vue";
import FormMenu from "@/components/elements/FormMenu";
import { IContent } from "@/Types/IContent";
import { IField } from "@/Types/IField";
export default defineComponent({
  name: "SettingsView",
  components: { FormMenu, FormItem },
  data() {
    return {
      description: "test desc",
      name: "test",
      list: { content: [] },
    };
  },
  async created() {
    let list = await this.getForm();
    this.list = JSON.parse(list.data[0].content);
  },
  methods: {
    async getForm() {
      return await FormModel.getList(String(this.$route.params.id));
    },
    async saveForm() {
      return await FormModel.updateForm(
        String(this.$route.params.id),
        JSON.stringify(this.list)
      );
    },
    async addField() {
      this.list.content.push({
        type: "text",
        value: "simple text",
        required: false,
        list: [],
      });
    },
    async removeField(id) {
      this.list?.content.splice(id, 1);
    },
    addOption(id) {
      this.list?.content[id].list.push("option");
    },
    changeType(type, id) {
      this.list.content[id].type = type;
      this.list.content[id].value = "simple text";
      this.list.content[id].list = ["option"];
    },
    changeValue(listIndex, event) {
      this.list.content[listIndex].value = event;
    },
  },
});
</script>

<style scoped>
.settings_button {
  border-radius: 15px;
  padding: 5px 15px;
  background-color: purple;
  color: white;
  font-weight: 700;
  border: none;
}
.settings_page {
  background-color: purple;
  height: 100%;
}
.back_link {
  text-align: left;
  padding: 20px;
}
.back_link a {
  color: white;
}
.settings_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: white;
  border-radius: 10px;
  width: 90%;
  margin: auto;
  padding: 15px;
}
.text_header {
  font-size: 40px;
  text-align: center;
  border: none;
}
.text_description {
  font-size: 14px;
  border: none;
  resize: none;
  min-height: 100px;
  width: 80%;
}
.input_wrapper {
  display: flex;
  justify-content: center;
}
button {
  max-width: 100px;
  max-height: 25px;
}
</style>
