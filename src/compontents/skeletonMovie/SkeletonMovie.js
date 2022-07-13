import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const SkeletonMovie = ({height = 160}) => {
    return (
        <>
            <Skeleton variant="rectangular"
                      width={'100%'}
                      height={height}
                      sx={{ bgcolor: 'grey.900' }}
            />
            {/*<Skeleton*/}
                {/*variant="text"*/}
                {/*width={'70%'}*/}
                {/*height={18}*/}
                {/*sx={{ bgcolor: 'grey.900' }}*/}
            {/*/>*/}
            <Skeleton
                variant="text"
                width={'100%'}
                height={24}
                sx={{ bgcolor: 'grey.900' }}
            />
        </>
    );
};

export default SkeletonMovie;