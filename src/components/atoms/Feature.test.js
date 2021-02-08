import { render } from "test-utils";

import Feature from "./Feature";

test("renders the title", () => {
  const { getByText } = render(<Feature title="My Title" />);

  expect(getByText("My Title")).toBeInTheDocument();
});

test("renders the children", () => {
  const { getByText } = render(<Feature>My Children</Feature>);

  expect(getByText("My Children")).toBeInTheDocument();
});
