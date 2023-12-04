import { TextField } from "@mui/material";
interface Props {
    text: string;
    onChangeText?(event: any): void;
}
const SearchField = (props: Props) => {
    const { text, onChangeText } = props;

    return (
        <TextField
            variant="outlined"
            label="Buscar"
            value={text}
            fullWidth
            onChange={onChangeText} />
    )

}
export default SearchField;