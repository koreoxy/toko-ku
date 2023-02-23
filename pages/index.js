import styles from '../styles/Home.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
import { useSession, signIn, signOut } from 'next-auth/react';
import Main from '@/components/home/main';
import FlashDeals from '@/components/home/flashDeals';
import Category from '@/components/home/category';
import {
  women_accessories,
  women_shoes,
  women_dresses,
  women_swiper,
  gamingSwiper,
  homeImprovSwiper,
} from '@/data/home';
import { useMediaQuery } from 'react-responsive';
import ProductsSwiper from '@/components/productSwiper';
import db from '@/utils/db';
import Product from '../models/Product';
import ProductCard from '@/components/productCard';

export default function Home({ country, products }) {
  console.log('prodcut', products);
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: '(max-width:850px)' });
  const isMobile = useMediaQuery({ query: '(max-width:550px)' });
  console.log(session);
  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            <Category
              header="Dreasess"
              products={women_dresses}
              background="#5a31f4"
            />
            {!isMedium && (
              <Category
                header="Shoes"
                products={women_shoes}
                background="#3c811f"
              />
            )}
            {isMobile && (
              <Category
                header="Shoes"
                products={women_shoes}
                background="#3c811f"
              />
            )}
            <Category
              header="Accesories"
              products={women_accessories}
              background="#000"
            />
          </div>
          <ProductsSwiper products={women_swiper} />
          <ProductsSwiper
            products={gamingSwiper}
            header="For Gamer"
            bg="#2f82ff"
          />
          <div className={styles.products}>
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  db.connectDb();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
  let data = await axios
    .get('https://api.ipregistry.co/?key=tbcrjdspb3zr0sjn')
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      // country: { name: data.name, flag: data.flag.emojitwo },

      // STATIC DATA
      country: {
        name: 'Indonesia',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
      },
    },
  };
}
