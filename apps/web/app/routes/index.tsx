import { json, LoaderFunction, useLoaderData } from "remix";
import { Button } from "ui";

export const loader: LoaderFunction = async () => {
  const res = await fetch("http://localhost:8080/");
  const data = await res.text();
  return json(data);
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <div>{data}</div>
      <Button />
    </div>
  );
}
