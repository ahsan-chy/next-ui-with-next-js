"use client";
import React, { ReactNode } from "react";

interface LayoutWrapperProps {
  children: ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  return <div>{children}</div>;
}

export default LayoutWrapper;
