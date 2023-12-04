import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Container, Grid } from "@mui/material";
import SearchField from "./components/SearchField";
import Character from "../../services/character/character";
import response, { info } from "../../types/response";
import character from "../../types/character";
import Details from "./components/Details";
import Paginator from "./components/Paginator";
import InformationDetails from "./components/InformationDetails";
const Home = () => {
    const [name, setName] = useState<string>("");
    const [characteres, setCharacteres] = useState<Array<character>>([]);
    const [characterDetail, setCharacterDetail] = useState<character>({
        episode: [],
        gender: "",
        id: 0,
        image: "",
        location: null,
        name: "",
        origin: null,
        species: "",
        status: "",
        type: "",
        url: "",
    });
    const [isOpenDetail, setOpenDetail] = useState<boolean>(false);
    const [info, setInfo] = useState<info>({
        count: 1,
        pages: 1,
        next: null,
        prev: null
    });
    const [page, setPage] = useState<number>(1);
    const character = Character.getInstance();
    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const onSearch = async () => {
        const params: string = `?name=${name}&page=${1}`;
        const response: response = await character.getByname(params);
        setCharacteres(response.results);
        setInfo(response.info);
        setPage(1);
    }

    const allCharacteres = async () => {
        const response: response = await character.getAll();
        setCharacteres(response.results);
        setInfo(response.info);
    }

    const onChangePage = async (event: React.ChangeEvent<unknown>, value: number) => {
        const params = `?name=${name}&page=${value}`;
        const response: response = await character.getByname(params);
        setPage(value);
        setCharacteres(response.results);
        console.log(response);
    }

    const onInformationDetail = (character: character) => {
        setCharacterDetail(character);
        setOpenDetail(true);
    }
    const onCloseDetails = () => {
        setOpenDetail(false);
    }

    useEffect(() => {
        allCharacteres();
    }, []);
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <SearchField text={name} onChangeText={onChangeName} />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={onSearch} variant="contained" color="primary">Buscar</Button>
                </Grid>
                {
                    characteres.length > 0 ? characteres.map((character: character, index: number) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Details character={character} onClick={onInformationDetail} />
                        </Grid>
                    )) : "No data found"
                }
                <Grid item xs={12}>
                    <Paginator page={page} count={info.pages} onChangePage={onChangePage} />
                </Grid>

            </Grid>
            <InformationDetails character={characterDetail} open={isOpenDetail} onClose={onCloseDetails} />
        </Container>
    );
}
export default Home;