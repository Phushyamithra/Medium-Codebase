import React, { useEffect } from 'react';
import '../../styles/Shop.css';
import StandardPage from './StandardPage.js';
import tee_side from '../../Assets/shop-assets/tee_side.png';
import shirt_side from '../../Assets/shop-assets/shirt_side.png';
import sweat_side from '../../Assets/shop-assets/sweat_side.png';
import hoodie_side from '../../Assets/shop-assets/hoodie_side.png';
import bg from '../../Assets/shop-assets/eyes_bg.png'

const Shop = () => {
    useEffect(() => {
        const ColorThief = window.ColorThief;
        const categoryItems = document.querySelectorAll('.category-item');

        categoryItems.forEach(item => {
            const img = item.querySelector('img');
            if (img.complete) {
                applyStyles(img, item);
            } else {
                img.addEventListener('load', () => {
                    applyStyles(img, item);
                });
            }
        });

        function applyStyles(img, item) {
            const colorThief = new ColorThief();
            const dominantColor = colorThief.getColor(img);
            const luminance = getLuminance(dominantColor);
            const textColor = luminance > 0.5 ? '#000' : '#fff';
            
            item.style.backgroundColor = `rgb(${dominantColor.join(',')})`;
            item.querySelector('h3').style.color = textColor;
        }

        function getLuminance(color) {
            const [r, g, b] = color.map(c => c / 255.0);
            const a = [r, g, b].map(v => {
                if (v <= 0.03928) {
                    return v / 12.92;
                }
                return Math.pow((v + 0.055) / 1.055, 2.4);
            });
            return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
        }
    }, []);

    return (
        <>
            <StandardPage src={'./renamed-shop-page.jpg'} type='image'>
                <section className="categories">
                    {/* <h2>Categories</h2> */}
                    <div className="category-item">
                        <h3>Hoodies</h3>
                        <img src={hoodie_side} alt="Hoodies" />
                    </div>
                    <div className="category-item">
                        <h3>Sweatshirts</h3>
                        <img src={sweat_side} alt="Sweatshirts" />
                    </div>
                    <div className="category-item">
                        <h3>Shirts</h3>
                        <img src={shirt_side} alt="Shirts" />
                    </div>
                    <div className="category-item">
                        <h3>Tees</h3>
                        <img src={tee_side} alt="Tees" />
                    </div>
                </section>
                <section className="drops">
                    <h2>Drops</h2>
                    <div className="drop-item">
                        <img src={'./renamed-our-story.jpg'} alt="Spiderverse" />
                        <h3>Spiderverse</h3>
                    </div>
                </section>
            </StandardPage>
        </>
    );
};

export default Shop;
