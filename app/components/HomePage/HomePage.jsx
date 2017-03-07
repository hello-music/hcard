import React from 'react';
import { CardBuilderContainer, CardBuilderPreviewContainer } from 'containers';
import { pageContainer, cardBuilderContainer, cardBuilderPreviewContainer } from './styles.scss';

const HomePage = () => (
    <div className={pageContainer}>
        <div className={cardBuilderContainer}>
            <CardBuilderContainer />
        </div>
        <div className={cardBuilderPreviewContainer}>
            <CardBuilderPreviewContainer />
        </div>
    </div>
);
export default HomePage;
