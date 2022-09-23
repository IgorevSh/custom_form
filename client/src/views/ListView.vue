<template>
  <div class="hello">
    <button class="add_button" @click="addForm()">ДОБАВИТЬ</button>
    <div v-for="item in list.data" :key="item.id">
      <FormListItem
        :content="JSON.parse(item.content)"
        :id="item.id"
        @deleteForm="deleteForm(item.id)"
      ></FormListItem>
    </div>
  </div>
</template>

<script lang="ts">
import { newForm } from "@/newform.json";
import { defineComponent } from "vue";
import FormModel from "@/models/FormModel";
import FormListItem from "@/components/elements/FormListItem.vue";
export default defineComponent({
  name: "ListView",
  components: {
    FormListItem,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      list: {},
    };
  },
  async created() {
    await this.updateList();
  },
  methods: {
    async deleteForm(id: string) {
      await FormModel.deleteForm(id);
      await this.updateList();
    },
    getList() {
      FormModel.getList();
    },
    async addForm() {
      await FormModel.saveForm(String(Date.now()), JSON.stringify(newForm));
      await this.updateList();
    },
    async updateList() {
      this.list = await FormModel.getList();
    },
  },
});
</script>

<style scoped>
.add_button {
  padding: 5px 15px;
  border-radius: 10px;
  margin: 15px 0;
  color: black;
  font-weight: 700;
  border: none;
  background-color: white;
}
</style>
