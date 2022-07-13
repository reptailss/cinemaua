import React from 'react';

import pathImg from '../../feature/pathImg'
import sliceString from '../../feature/sliceString'

import './reviewview.scss'
import plugImg from '../../resources/img/plugimg.png'

const ReviewView = ({data}) => {


    const reviewItems = data.map((item, i) => {
        const {content, author_details, created_at, updated_at} = item;
        const {name, avatar_path} = author_details;
        const avatarSlice = avatar_path ? avatar_path.slice(1, avatar_path.length) : null
        const createdTime = sliceString(created_at, 10, false)
        const updatedTime = sliceString(updated_at, 10, false)
        const srcImg = avatar_path ? (avatar_path.includes('http') ? avatarSlice : pathImg(avatar_path)) : plugImg;
        return (

            <div key={i} className="review__item mt-2">
                <img src={srcImg} alt={name} className="review__avatar"/>
                <div className="review__info">
                    <div className="review__inner">
                        <div className="review__name title-2">
                            {name}
                        </div>
                        <div className="review__time text">
                            {created_at ? createdTime : `${updatedTime} changed`}
                        </div>
                    </div>

                    <div className="review__message text mt-1">
                        {content}
                    </div>

                </div>
            </div>

        )
    })


    return (
        <>


            <div className="title">{data.length > 0 ? '' : 'no reviews'}</div>

            {reviewItems}
        </>
    );
};

export default ReviewView;