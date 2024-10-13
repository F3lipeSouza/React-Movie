import { HeaderPage } from "./headerStyled";

export function Header({page}) {

  function NomeDoHeader({page}){
    return(
      <p>{page}</p>
    )
  }
  
  return (
    <HeaderPage>
      <NomeDoHeader page={page}/>
    </HeaderPage>
  );
}
