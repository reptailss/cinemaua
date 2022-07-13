import React from 'react';

const GenresList = ({data}) => {


    const genresItems = data ? data.map((item, i) => {
        if (i === data.length - 1) {
            return <div key={i} className={'movie__genres-item'}>

                {` ${item.name}.`}
            </div>
        }
        return <div key={i} className={'movie__genres-item'}>

            {` ${item.name},`}
        </div>

    }) : null;


    return (
        <>
            {genresItems}
        </>
    );
};

export default GenresList;