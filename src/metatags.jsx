import React from 'react';
import Helmet from 'react-helmet';
import { func, shape, string, object, array } from 'prop-types';

const getDefault = {
    title: "My Internet Art Website", 
    description: "My Website is focuses on the internet artwork and how it compliments the website as a whole"
    
};

export const getPageMetadata = metaData => {
    const { title, description, keywords } = '';
    const defaultData = getDefault();
    return {
        title: title || defaultData?.title,
        description: description || defaultData?.description,
        
        
    };
};

const MetaTags = props => {
    const { metaData } = props;
    const meta = getPageMetadata(metaData);
    return (
        <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
           
        </Helmet>
    );
};

export default MetaTags;