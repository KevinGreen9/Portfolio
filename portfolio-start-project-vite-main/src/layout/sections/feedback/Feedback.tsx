import {S} from "./Feedback_Styles.ts"
import {Container} from "../../../componets/Container.tsx";



export const Feedback = () => {
    return (
        <S.FeedbackSection id={"contact"}>
        <Container>
            <S.Feedback>
                <S.Text>For any questions please <span>mail me:</span></S.Text>
                <S.Mail href={"https://mail.ru/"} target="_blank" rel="noopener noreferrer">hi@pavanmg.in</S.Mail>
            </S.Feedback>
        </Container>
        </S.FeedbackSection>
    );
};

