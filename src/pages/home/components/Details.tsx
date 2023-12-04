import { Card, Box, CardContent, Typography, CardMedia, CardActionArea } from "@mui/material";
import character from "../../../types/character";

interface Props {
	character: character;
	onClick(character: character): void
}
const Details = (props: Props) => {
	const { character, onClick } = props;
	const onActionArea = () => {
		onClick(character);
	}

	return (
		<CardActionArea onClick={onActionArea}>
			<Card sx={{ display: "flex" }}>

				<CardMedia
					component="img"
					sx={{ width: 150 }}
					image={character.image}
					alt="character image"
				/>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography component="div" variant="h5">
							{character.name}
						</Typography>
						<Typography variant="subtitle1" color="text.secondary" component="div">
							{`${character.species} - ${character.status}`}
						</Typography>
					</CardContent>
					<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

					</Box>
				</Box>
			</Card >
		</CardActionArea>
	)

}
export default Details;