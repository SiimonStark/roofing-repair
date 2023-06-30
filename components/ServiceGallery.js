import React, { useState, useEffect } from 'react';
import styles from '../styles/Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCircleRight, faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const materials = [
  {
    type: "Shingles",
    text: ["Asphalt shingles are one of the most popular roofing products on the market. Known for their longevity, durability and wide array of style and color options, asphalt shingles are an excellent economic alternative to other roofing products. With standard to luxury options there is an affordable option for every budget.", "Additionally, they are easy to install and repair and hold up well in our Oregon climate.", "Proper attic ventilation band installation can help maximize the lifespan of asphalt shingles. Roof It All is a certified installer of all the top asphalt shingle manufacturers."],
    imageLink: "/shingles.jpg"
  },
  {
    type: "Composite",
    text: ["You probably think since composite shingles are made out of recycled materials or a polymer, they are easily breakable. This couldn’t be further from the truth.", " Because of the materials' composite shingles are made of, they’re one of the most durable roofing materials on the market. If you hit them with a hammer, it will bounce back with no damage to the shingle.", " Composite roof shingles look exactly like real cedar shake and slate"],
    imageLink: "/composite.jpg"
  },
  {
    type: "Metal",
    text: ["Longer life span, improved energy efficiency and a reduced environmental impact are just a few of the key benefits homeowners consider when choosing a metal roof.", "Besides longevity, metal roofing typically uses a reflective solar coating designed to minimize heat buildup and reduce air conditioning costs.", "Metal weighs less and installs more quickly than traditional shingle products.  And for homeowners tired of constant asphalt shingle replacement, metal can often be installed over existing shingles which saves the cost/labor of shingle tear off as well as disposal/landfill fees."],
    imageLink: "/metal.jpg"
  },
  {
    type: "Tile",
    text: ["When installed correctly, concrete tile roofs can withstand hail stones as large as 2 inches", "Can last hundreds of years. Tile roofs easily outlast every other residential roofing material.", "Fireproof: Clay and concrete tiles carry a Class-A fire rating, which is the highest", "Because of the space between each tile, a tile roof is naturally better ventilated and insulated providing a cooler house in the summer and a warmer house in the winter.", "Because a tile roof can last, potentially, hundreds of years, it is the cheapest long-term roofing material."],
    imageLink: "/tile.jpg"
  },
  {
    type: "Flat roofing system",
    text: ["Flat roofing is not actually flat; it has a very low slope—between 1/4 to 1/2 inch per foot—so that it drains water. But such a low slope holds snow and water much longer than a steeply pitched roof and therefore needs a very different material to stay watertight. While standard sloped roofs typically have shingles that are overlapped like fish scales so that water slides over them, a flat roof is designed as a continuous, or monolithic, surface that can hold some standing water for a limited time."],
    imageLink: "/flat.jpg"
  }
];

export const ServiceGallery = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className={styles.materials}>
      <h3>Material Types We Specialize In</h3>
      <hr />
      <div className={styles.gallery}>
        <div className={styles.controls}>
          <div className={styles.content}>
            <img src={materials[index].imageLink} />
            <article className={styles.contentText}>
              <h4>{materials[index].type}</h4>
              {materials[index].text.map((t, i) => (<p key={i}>{t}</p>))}
            </article>
          </div>
          <div className={styles.controlsLeft} onClick={() => index > 0 ? setIndex(index - 1) : setIndex(materials.length - 1)}>
            <FontAwesomeIcon icon={faCircleLeft} />
          </div>
          <div className={styles.controlsRight} onClick={() => index < 4 ? setIndex(index + 1) : setIndex(0)}>
            <FontAwesomeIcon icon={faCircleRight} />
          </div>
          <div className={styles.controlsMarker}>
            {materials.map((m, i) => (i === index
              ? <FontAwesomeIcon id="active" className={styles.active} icon={faCircle} />
              : <FontAwesomeIcon icon={faCircle} />))}
          </div>
        </div>
      </div>
    </section>
  )
}