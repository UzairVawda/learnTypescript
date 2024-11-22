import React, { useState } from "react";

type Person = {
  name: string;
};

function Component() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // to use target you have to asset to TS that its a html form element
    // const formData = new FormData(e.target as HTMLFormElement);
    console.log(e.currentTarget);

    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);
    const text = formData.get("text") as string;
    console.log(text);
    const newUser: Person = { name: text };
    console.log(newUser);
  };

  return (
    <section>
      <h2>Events</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          placeholder="Name"
          className="form-input mb-1"
          onChange={(e) => setName(e.target.value)}
          name="text"
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          className="form-input mb-1"
          onChange={updateEmail}
          name="email"
        />
        <button type="submit" className="btn btn-block  ">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
