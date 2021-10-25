import React from 'react';

const Background = ( { children } ) =>
{
    return (
       
        <body className="bg-gray-300 dark:bg-black transition-all">
            {children}
        </body>
    )
}

export default Background;