import React from "react";
import { Pagination, Stack } from "@mui/material";
interface Props {
    page: number;
    onChangePage(event: any, value: number): void;
    count: number;
}
const Paginator = (props: Props) => {
    const { page, onChangePage, count } = props;
    return (
        <Stack spacing={1} alignItems={"center"}>
            <Pagination count={count} page={page} onChange={onChangePage} />
        </Stack>
    )


}
export default Paginator;