"use client";
import { usePathname } from "next/navigation";

const TestComponent = () => {
  const pathname = usePathname();
  if (!pathname.endsWith("/")) {
    throw new Error(`trailing slash not present. ${pathname}`);
  }
  return (
    <pre>
      Pathname: {pathname}
      <br />
    </pre>
  );
};

export default TestComponent;
