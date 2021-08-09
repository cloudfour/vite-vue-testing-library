import { createApp } from "vue";
import { render, screen, waitFor } from "@testing-library/vue";
import user from "@testing-library/user-event";
import HelloWorld from "./HelloWorld.vue";

test("Hello World renders", async () => {
  render(HelloWorld);
  const buttonEl = screen.getByRole("button", { name: /count/i });
  expect(buttonEl).toHaveTextContent(/count is: 0/i);
  user.click(buttonEl);
  user.click(buttonEl);
  user.click(buttonEl);
  await waitFor(() => expect(buttonEl).toHaveTextContent(/count is: 3/i));
});
