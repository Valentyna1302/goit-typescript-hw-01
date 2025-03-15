type User1 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(
  initialValues: Partial<User1>,
  updates: Partial<User1>
): User1 {
  return {
    name: "",
    surname: "",
    email: "",
    password: "",
    ...initialValues,
    ...updates,
  };
}

const updatedUser = createOrUpdateUser(
  { email: "user@mail.com" },
  { password: "newpassword123" }
);

console.log(updatedUser);
