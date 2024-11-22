type User = {
  type: "simple" | "advance";
  name: string;
  email?: string;
};

function Component(props: User): JSX.Element {
  const { type, name, email } = props;
  console.log(type);
  return (
    <section
      className={
        (type === "advance" ? "alert-danger" : "alert-success") + " alert"
      }
    >
      <h2>Name: {name}</h2>
      {email && <h2>Email: {email.toLowerCase()}</h2>}
    </section>
  );
}
export default Component;
