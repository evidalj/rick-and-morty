import character from "../../../types/character";
import { Dialog, DialogTitle, DialogContent, Typography, Grid, CardMedia, DialogActions, Button } from "@mui/material";
interface Props {
	character: character;
	open: boolean;
	onClose(): void;
}
const InformationDetails = (props: Props) => {
	const { character, open, onClose } = props;
	return (
		<Dialog open={open} maxWidth="sm" fullWidth onClose={onClose}>
			<DialogTitle>{character.name}</DialogTitle>
			<DialogContent>
				<Grid container spacing={1}>
					<Grid item sm={6}>
						<Typography>{`Species: ${character.species}`}</Typography>
						<Typography>{`Status: ${character.status}`}</Typography>
						<Typography>{`Gender: ${character.gender}`}</Typography>
						<Typography>{`Location: ${character.location.name}`}</Typography>
						<Typography>{`Type: ${character.type}`}</Typography>
						<Typography>{`Origin: ${character.origin.name}`}</Typography>
					</Grid>
					<Grid item sm={6}>
						<CardMedia
							component="img"

							image={character.image}
							alt="character image"
						/>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Close</Button>
			</DialogActions>
		</Dialog>
	)
}

export default InformationDetails;