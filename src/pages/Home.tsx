import { styles } from '../styles';
import ComputersCanvas from '../components/canvas/Computer';


const Home = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <p className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Karthik</span>
          </p>
          <p className={`${styles.heroSubText} max-sm:mt-2 text-white-100`}>
            I develop full-stack web applications and user interfaces, <br className='sm:block hidden' />
            and create responsive and intuitive digital solutions.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className="scrolldown">
            <div className="chevrons">
              <div className="chevrondown"></div>
              <div className="chevrondown"></div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Home