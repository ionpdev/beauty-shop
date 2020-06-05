import React from 'react'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'


class Directory extends React.Component{
    constructor() {
        super()
        this.state = {
            sections: [{
                title: 'Bath & Shower',
                    imageUrl: 'https://res.cloudinary.com/lush/image/upload/s--Djj-AUK8--/c_fill,q_jpegmini,w_1800/v1/lush_website_uk/2020/01/22/calacas_shower_gel_2018_1_of_2.jpg',
                    id: 1,
                    linkUrl: 'shop/bathandshower'
                 },
                {
                    title: 'Face',
                    imageUrl: 'https://res.cloudinary.com/lush/image/upload/s--bRR2AVB---/c_fill,q_jpegmini,w_1800/v1/lush_website_uk/2019/11/28/golden_glow_naked_moisturiser_naked_skincare_hero_02.jpg',
                    id: 2,
                    linkUrl: 'shop/face'
                },
                {
                    title: 'Body',
                    imageUrl: 'https://res.cloudinary.com/lush/image/upload/s--R6w5aOJV--/c_fill,h_200,q_jpegmini,w_200/v1/lush_content/products/main/2017/10/web_dream_cream_self_preserved_body_lotion_ayr_2017.jpg?itok=Nus0peO2',
                    linkUrl: 'shop/body'
                },
                {
                    title: 'Hair',
                    imageUrl: 'https://res.cloudinary.com/lush/image/upload/s--QgT7jHpQ--/c_fill,q_jpegmini,w_1800/v1/lush_content/products/hero/2019/02/valkyrie_conditoner_lush_labs_2019-1.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/hair'
                },
                {
                    title: 'Gifts',
                    imageUrl: 'https://res.cloudinary.com/lush/image/upload/s--LeLgiRWO--/c_fill,q_jpegmini,w_1800/v1/lush_website_uk/category/hero/valentines_gift_banner_2020_01_0.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/gifts'
            }]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                 {this.state.sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory