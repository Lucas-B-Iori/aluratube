import styled from 'styled-components';
import { StyledTimeline } from './Timeline';

export const StyledFavoritos = styled(StyledTimeline)`
    flex: .25;
    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    a {
        width: 80px;
        padding-right: 0;
        text-align: center;
        .nome-fav {
            padding-right: 0;
            width: 100px;
        }
    }
    
`;

