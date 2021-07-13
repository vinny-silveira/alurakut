import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
    return (
        <Box>
            <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}}
                 alt={"Profile Image"}/>
        </Box>
    )
}

export default function Home() {
    const usuarioAleatorio = 'vinny-silveira';
    const pessoasFavoritas = [
        'juunegreiros',
        'omariosouto',
        'peas',
        'reactjs',
        'vercel',
        'docker',
    ]

    return (
        <>
            <AlurakutMenu githubUser={usuarioAleatorio}/>
            <MainGrid>
                {/* <Box style="grid-area: profileArea;"> */}
                <div className="profileArea" style={{gridArea: 'profileArea'}}>
                    <ProfileSidebar githubUser={usuarioAleatorio}/>
                </div>
                <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
                    <Box>
                        <h1 className="title">
                            Bem vindo(a)
                        </h1>

                        <OrkutNostalgicIconSet
                            recados={"10.987"}
                            fotos={"2.598"}
                            videos={"1.963"}
                            fas={"3.998"}
                            mensagens={"9.912"}
                            confiavel={3}
                            legal={3}
                            sexy={3}
                        />
                    </Box>
                </div>
                <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">
                            Pessoas da comunidade ({pessoasFavoritas.length})
                        </h2>

                        <ul>
                            {pessoasFavoritas.map((itemAtual, index) => {
                                return (
                                    <li key={index}>
                                        <a href={`/users/${itemAtual}`} key={itemAtual}>
                                            <img src={`https://github.com/${itemAtual}.png`} alt={"Profile Image"}/>
                                            <span>{itemAtual}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBoxWrapper>
                </div>
            </MainGrid>
        </>
    )
}
