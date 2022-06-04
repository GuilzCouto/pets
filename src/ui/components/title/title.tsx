import { StyledTitle, SubTitle } from "./title.style";

interface TitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title(props: TitleProps){  
    return (
        <>
            <StyledTitle>{props.title}</StyledTitle>
            <SubTitle>{props.subtitle}</SubTitle>
        </>
    ) 
}