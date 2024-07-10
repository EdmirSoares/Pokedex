import { TypeTag } from "./styles";

interface TagProps {
	children?: React.ReactNode;
	color?: string;
}

export default function Tag({ children, color }: TagProps) {
	return <TypeTag color={color}>{children}</TypeTag>;
}
