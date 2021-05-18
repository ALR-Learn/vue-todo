import { mount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("Todo", () => {
  it("creates a todo", async () => {
    const wrapper = mount(Todo);

    const expected = "some value ✖✔";

    const input = wrapper.find('input')
    await input.setValue('some value');
    await input.trigger('keyup.enter');
    const ulContent = wrapper.find('ul').text();

    expect(ulContent.match(expected));
   });
});
