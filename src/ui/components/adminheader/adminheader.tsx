import { Link, Box } from "@mui/material";
import NextLink from 'next/link';
import { ContainerHeader, Logo, ContainerLinks } from "./adminheader.style";

export default function AdminHeader(){
    return (
        <ContainerHeader>
            <div>
                <Logo src="/images/logo.svg" alt="Adote um Pet"/>
                <ContainerLinks>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        <a>Cadastrar Pet</a>
                    </Link>
                    <Link component={NextLink} href={'/pets/relatorio'}>
                        <a>Relatório{' '}
                            <Box component={'span'} sx={{display:{sm:'initial', xs:'none'}}}>
                                de Adoção
                            </Box>
                        </a>
                    </Link>
                </ContainerLinks>
            </div>
        </ContainerHeader>
    )
}