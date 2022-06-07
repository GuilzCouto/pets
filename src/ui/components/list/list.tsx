import { StyledList, ItemList, Picture, Information, Name, Description } from "./list.style";
import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/pet";
import { TextService } from "../../../data/services/TextService"

interface ListProps{
    pets: Pet[];
    onSelect: (pet: Pet) => void
}

export default function List(props: ListProps){
    const textMaxSize = 200;

    return (
        <StyledList>
            {props.pets.map(pet => (
                <ItemList key={pet.id}>
                    <Picture src={pet.picture} alt={pet.name}/>
                    <Information>
                        <Name>{pet.name}</Name>
                        <Description>
                            {TextService.limitText(pet.story, textMaxSize)}
                        </Description>
                        <Button variant={'contained'} fullWidth onClick={() => props.onSelect(pet)}>Adotar {pet.name}</Button>
                    </Information>
                </ItemList>
            ))}
        </StyledList>
    )
}