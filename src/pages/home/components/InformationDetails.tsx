import character from "../../../types/character";
import { Dialog, DialogTitle, DialogContent, Typography, Grid, CardMedia, DialogActions, Button, IconButton, AppBar, Toolbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
interface Props {
	character: character;
	open: boolean;
	onClose(): void;
}
const InformationDetails = (props: Props) => {
	const { character, open, onClose } = props;
	return (
		<Dialog open={open} maxWidth="sm" fullWidth onClose={onClose}>
			<DialogTitle sx={(theme) => ({
					backgroundColor: theme.palette.primary.main
				})}
			>
				{character.name}
			</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={onClose}
				sx={(theme) => ({
					position: 'absolute',
					right: 8,
					top: 8,
					// color: theme.palette.grey[500]
				})}
			>
				<CloseIcon />
			</IconButton>
			<DialogContent dividers>
				<Grid container spacing={1}>
					<Grid item sm={6}>
						<Typography>{`Species: ${character?.species}`}</Typography>
						<Typography>{`Status: ${character?.status}`}</Typography>
						<Typography>{`Gender: ${character?.gender}`}</Typography>
						<Typography>{`Location: ${character?.location?.name}`}</Typography>
						<Typography>{`Type: ${character?.type}`}</Typography>
						<Typography>{`Origin: ${character?.origin?.name}`}</Typography>
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
		</Dialog>
	)
}

export default InformationDetails;