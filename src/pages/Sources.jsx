import "@/styles/pages/Sources.scss"
import SectionTitle from '@/components/SectionTitle';

const Sources = () => {
  return (
    <div className='page sources'>
      <section className="sources__content">
        <SectionTitle>Використані джерела</SectionTitle>

        <ul className='sources__list'>
          <li className='sources__list-item'>
            <a href='https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0' target={'_blank'} className='sources__link'>Wikipedia</a>
          </li>

          <li className='sources__list-item'>
            <a href='https://developer.mozilla.org/en-US/' target={'_blank'} className='sources__link'>Mozilla Developer Network</a>
          </li>

          <li className='sources__list-item'>
            <a href='https://habr.com/ru/all/' target={'_blank'} className='sources__link'>Habr</a>
          </li>

          <li className='sources__list-item'>
            <a href='https://www.youtube.com/' target={'_blank'} className='sources__link'>Відео</a>
          </li>

          <li className='sources__list-item'>
            <a href='https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/' target={'_blank'} className='sources__link'>Статистика фреймворків</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Sources