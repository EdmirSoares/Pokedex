import { Dimensions } from "react-native";
import React from "react";
import {
	ContainerItem,
	PokemonCard,
	PokemonImageSmall,
	RecentSection,
	TextComponent,
	TypeTag,
} from "./styles";

interface SmallCardProps {
	item: {
		id: number;
		name: string;
		typeOne: string;
		typeTwo?: string;
		description: string;
		image: any;
	};
}
export default function SmallCard({ item }: SmallCardProps) {
	const width = parseInt(Dimensions.get("window").width.toFixed(0));
	return (
		<ContainerItem width={width}>
			<RecentSection>
				<PokemonImageSmall source={item.image} />
				<PokemonCard>
					<TextComponent size={16} weight={700}>
						{item.name}
					</TextComponent>
					<TypeTag color={"#75A03E"}>
						<TextComponent size={12} weight={700} color={"#fff"}>
							{item.typeOne}
						</TextComponent>
					</TypeTag>
					{item.typeTwo && (
						<TypeTag color={"#E6D637"}>
							<TextComponent
								size={12}
								weight={700}
								align="center"
							>
								{item.typeTwo}
							</TextComponent>
						</TypeTag>
					)}
				</PokemonCard>
			</RecentSection>
		</ContainerItem>
	);
}
