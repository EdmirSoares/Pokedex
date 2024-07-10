import React from "react";
import { RowContainer } from "./styles";

interface RowComponentProps {
	children?: React.ReactNode;
}

export default function RowComponent({ children }: RowComponentProps) {
	return <RowContainer>{children}</RowContainer>;
}
