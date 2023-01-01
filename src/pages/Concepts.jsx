import '@/styles/pages/Concepts.scss';
import SectionTitle from '@/components/SectionTitle';
import HorizontalPreview from '@/components/HorizontalPreview';

const Concepts = () => {
  return (
    <div className='concepts__page page'>
      <section className="tech__text-section text-section">
        <SectionTitle>Навіщо потрібні вивчати поняття</SectionTitle>

        <p className="text-section__text">
          Трійка HTML, CSS та JavaScript звісно дуже потужна, але ,використовуючи лише ці три технології та не знаючи  більш продвинутих понять браузера та мереж в цілому, неможливо будувати абсолютно все що ми забажаєм. На цій сторінці я коротко розповім про поняття які потрібно засвоїти, щоб розуміти як будувати складні застосунки. Наприклад написати застосунок з оновленням даних в реальному часі, зменшити вагу застосунку видаливши біліотеку та написавши своє рішення проблеми і так далі.
        </p>
      </section>



      <section className="concepts__content">
        <HorizontalPreview 
          title='База даних' 
          src='/assets/concepts/db.png' 
          link='https://support.microsoft.com/uk-ua/office/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%96-%D0%B2%D1%96%D0%B4%D0%BE%D0%BC%D0%BE%D1%81%D1%82%D1%96-%D0%BF%D1%80%D0%BE-%D0%B1%D0%B0%D0%B7%D0%B8-%D0%B4%D0%B0%D0%BD%D0%B8%D1%85-a849ac16-07c7-4a31-9948-3c8c94a7c204'
          variant='left-to-right'
        >
          Сукупність даних, організованих відповідно до концепції, яка описує характеристику цих даних і взаємозв'язки між їх елементами; ця сукупність підтримує щонайменше одну з областей застосування. В загальному випадку база даних містить схеми, таблиці, подання, збережені процедури та інші об'єкти. Дані у базі організовують відповідно до моделі організації даних. Таким чином, сучасна база даних, крім самих даних, містить їх опис та може містити засоби для їх обробки.
        </HorizontalPreview>

        <HorizontalPreview 
          title='API' 
          src='/assets/concepts/api.png' 
          link='https://habr.com/ru/post/464261/'
          variant='right-to-left'
        >
          Набір визначень підпрограм, протоколів взаємодії та засобів для створення програмного забезпечення. Спрощено — це набір чітко визначених методів для взаємодії різних компонентів. API надає розробнику засоби для швидкої розробки програмного забезпечення. API може бути для веббазованих систем, операційних систем, баз даних, апаратного забезпечення, програмних бібліотек.
        </HorizontalPreview>

        <HorizontalPreview 
          title='WebSockets' 
          src='/assets/concepts/ws.png' 
          link='https://developer.mozilla.org/ru/docs/Web/API/WebSockets_API'
          variant='left-to-right'
        >
          Веб-сокети це просунута технологія, що дозволяє відкрити постійне двонаправлене мережне з'єднання між браузером користувача та сервером. За допомогою його API ви можете відправити повідомлення на сервер і отримати відповідь без виконання http-запиту, причому цей процес буде подієво-керованим. За допомогою цієї технології отримання даних з сервера в реальному часі стає більш легким, та немає необхідності писати додаткові HTTP запити з конфігурування заголовку.
        </HorizontalPreview>

        <HorizontalPreview 
          title='Рендеринг сторінок' 
          src='/assets/concepts/render.png' 
          link='https://dev.to/mbaljeetsingh/what-is-csr-ssr-ssg-isr-different-rendering-strategies-and-which-framework-does-it-better-angular-react-vue-4lkp'
          variant='right-to-left'
        >
          <>
            <p>
              Види рендерингу існують з метою оптимізації завантаження даних сторінки. В цілому існує декілька таких видів:
            </p>

            <ul className='concepts__links-list'>
              <li className='concepts__links-item'>
                <a>Server Side Rendering</a>
              </li>

              <li className='concepts__links-item'>
                <a>Client Side Rendering</a>
              </li>

              <li className='concepts__links-item'>
                <a>Static Site Generation</a>
              </li>

              <li className='concepts__links-item'>
                <a>Incremental Site Generation</a>
              </li>
            </ul>

            <p>
              Також є такі поняття як <a className='concepts__text-link' target={'_blank'} href='https://uk.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B7%D0%B0%D1%81%D1%82%D0%BE%D1%81%D1%83%D0%BD%D0%BE%D0%BA'>Single Page Application</a>, що дуже часто використовується разом з React та <a className='concepts__text-link' target={'_blank'} href='https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps'>Progressive Web Application</a>, який зберігає дані про сайт на пристрій користувача, та користувач може користуватись деяким інтерфейсом навіть без підлючення до мережі Інтернет.
            </p>
          </>
        </HorizontalPreview>
      </section>
    </div>
  )
}

export default Concepts