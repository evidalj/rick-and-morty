import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
interface Props {
    text: string;
    onChangeText?(event: React.ChangeEvent<HTMLInputElement>): void;
    handleSearch(): void;
    handleClean?(): void;
}

const SearchField = (props: Props) => {
    const { text, onChangeText, handleSearch, handleClean } = props;
    const handlePressEnter = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    }
    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="txt-search">Search</InputLabel>
            <OutlinedInput
                id="txt-search"
                type="text"
                value={text}
                onChange={onChangeText}
                onKeyUp={handlePressEnter}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="text search"
                            edge="end"
                            onClick={handleClean}
                        >
                            {text.length > 0 ? <ClearIcon /> : <SearchIcon />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Search" />

        </FormControl>

    )

}
export default SearchField;