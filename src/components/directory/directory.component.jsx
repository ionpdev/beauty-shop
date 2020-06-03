import React from 'react'

import './directory.styles.scss'
import '../menu-item/menu-item.component'
import MenuItem from '../menu-item/menu-item.component'

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
                    imageUrl: 'https://res.cloudinary.com/lush/image/upload/s--l7bH1cvv--/c_fill,h_305,q_jpegmini,w_521/v1/lush_website_uk/2020/02/03/dream_cream_hand_and_body_lotion_hero_ayr_5.jpg'
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
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory