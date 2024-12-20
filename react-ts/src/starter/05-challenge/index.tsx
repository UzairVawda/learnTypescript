type SimpleUser = {
  type: "simple";
  name: string;
};

type AdvUser = {
  type: "advance";
  name: string;
  email: string;
};

type User = SimpleUser | AdvUser;

function Component(props: User): JSX.Element {
  const { type, name } = props;
  console.log(type);
  return (
    <section
      className={
        (type === "advance" ? "alert-danger" : "alert-success") + " alert"
      }
    >
      <h2>Name: {name}</h2>
      {type === "advance" && <h2>Email: {props.email.toLowerCase()}</h2>}
    </section>
  );
}
export default Component;
