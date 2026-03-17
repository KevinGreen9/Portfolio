import { Icon} from "../icon/Icon"
import styled from "styled-components";

 export const Logo = () => {
    return (
        <Link href="">
            <Icon iconId={"logo"} width={"97"} height={"59"}/>
        </Link>
    );
 };


const Link = styled.a`
    //display: inline-flex;
    //align-items: center;
    //justify-content: center;
    //line-height: 0;
    //transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    //
    //&:hover {
    //    transform: translateY(-5px) scale(1.1);
    //    filter: drop-shadow(0 10px 8px rgba(0,0,0,0.1));
    //}
    //
    //&:active {
    //    transform: translateY(-2px) scale(1.05);
    //    filter: drop-shadow(0 5px 4px rgba(0,0,0,0.1));
    //    
    //}
`