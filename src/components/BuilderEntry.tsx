import { createSignal } from "solid-js";
// @ts-ignore: this package doesnt have types
import { RenderContent } from "@builder.io/sdk-solid";

const [count, setCount] = createSignal(0);
function MyFunComponent({ text }: { text: string }) {
  return (
    <div>
      <h3>{text.toUpperCase()}</h3>
      <p>{count}</p>
      <button onClick={() => setCount((c) => (c += 1))}>Click me </button>
    </div>
  );
}

const CUSTOM_COMPONENTS = [
  {
    component: MyFunComponent,
    name: "blog-post",
    inputs: [
      {
        name: "text",
        type: "string",
        defaultValue: "Hello world",
      },
    ],
  },
];

export function App({ builderContent }: { builderContent: any }) {
  return (
    <RenderContent
      content={builderContent}
      model="page"
      customComponents={CUSTOM_COMPONENTS}
      apiKey={"5cd998e3a08d4a9b91194777dc6d52aa"}
    />
  );
}
