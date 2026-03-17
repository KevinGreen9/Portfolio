import line from "../../assets/images/img/Divider.png"
import styled from "styled-components";



 export const Line = () => {
    return (
        <LineWrapper>
            <LineStyled src={line} alt="line"/>
        </LineWrapper>

    );
};

 const LineWrapper = styled.div`
 display: flex;
 justify-content: center;
     padding: 45px 0;
 `

const LineStyled = styled.img`
    stroke-width: 2px;
    stroke: #42446e;
`
