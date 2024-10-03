"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Button radius="full" color="warning" onPress={() => setCount(count + 1)}>
      Count is {count}
    </Button>
  );
};
