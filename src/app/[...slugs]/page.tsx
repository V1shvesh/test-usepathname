import TestComponent from "@/app/[...slugs]/TestComponent";
import { Fragment } from "react";

const Page = ({ params }: { params: string[] }) => {
  return (
    <Fragment>
      <TestComponent />
      <br />
      <pre>
        Params:
        {JSON.stringify(params, null, 2)}
      </pre>
    </Fragment>
  );
};

export default Page;
