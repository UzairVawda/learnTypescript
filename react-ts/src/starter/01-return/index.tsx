// we are noting the JSX.Element type being passed back to app.tsx
function Component(): JSX.Element | string | null {
  return "string";
  return null;
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Return Type</h2>
    </div>
  );
}
export default Component;
