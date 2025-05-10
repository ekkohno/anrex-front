import React from 'react'
import SeactionHeading from './SectionsHeading/SectionHeading'
import Card from '../Card/Card';
import Komod from '../../assets/img/komod.jpg'
import Bed from '../../assets/img/bed.jpg'
import Kuhnya from '../../assets/img/kuhnya.jpg'
import Shkaf from '../../assets/img/shkaf.jpg'
import Carousel from 'react-multi-carousel';
import { responsive } from '../../utils/Section.constants';
import './NewArrivals.css';

const items = [{
    'title':'Комоды и тумбы',
    imagePath:Komod
},{
    'title':'Кровати',
    imagePath:Bed
},{
    'title':'Кухни',
    imagePath:Kuhnya
},{
    'title':'Шкафы',
    imagePath:Shkaf
},
{
    'title':'Зеркала',
    imagePath:require('../../assets/img/zerkalo.jpg')
},
{
  'title':'Столы',
  imagePath:require('../../assets/img/stol.jpg')
},
{
  'title':'Мягкая мебель',
  imagePath:require('../../assets/img/divan.jpg')
},
{
  'title':'Полки',
  imagePath:require('../../assets/img/polka.jpg')
},
{
  'title':'Матрасы',
  imagePath:require('../../assets/img/matras.jpg')
},
{
  'title':'Стеллажи',
  imagePath:require('../../assets/img/stellazh.jpg')
},
{
    'title':'Стенки-горки',
    imagePath:require('../../assets/img/stenka-gorka.jpg')
}];

const NewArrivals = () => {
  return (
    <>
    <SeactionHeading title={'Категории'}/>
    <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass={'react-slider-custom-item'}
        className='px-8'
      >
        {items && items?.map((item,index)=> <Card key={item?.title +index} title={item.title} imagePath={item.imagePath}/>)}

      </Carousel>
    </>
  )
}

export default NewArrivals