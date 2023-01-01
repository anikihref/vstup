import React from 'react'
import SectionTitle from '@/components/SectionTitle';
import Accordion from '@/components/Accordion';
import ReadMoreButton from '@/components/ReadMoreButton';
import VericalPreview from '@/components/VerticalPreview';
import '@/styles/pages/MainPage.scss';

const MainPage = () => {
  return (
    <div className='page main-page'>
      <section className="main-page__title-section title-section">
        <h1 className="title-section__title">Привіт, та вітаю на презентаційному сайті на тему Веб-технології</h1>

        <p className="title-section__text">
          Веб-технології - це технології які допомагають нам структуризувати, стилізувати інформацію з певного джерела, зробити зручним використання ресурсів цього джерела.
          На цьому сайті ви дізнаєтесь про те, як можна будувати сайти, що для цього потрібно знати та навіщо, основні та продвинуті поняття, напрямки розвитку та інше. 
        </p>
      </section>

      <section className="main-page__dev-directions dev-directions">
        <SectionTitle>Напрямки розробки</SectionTitle>

        <div className="dev-directions__content">
          <VericalPreview title='Frontend' img='/assets/main/frontend.png'>
            Frontend - це розробка користувацького інтерфейсу і функцій, які працюють на стороні клієнта веб-сайту або програми. Це все, що бачить користувач, відкриваючи веб-сторінку, і з чим він взаємодіє.
            Frontend-розробник співпрацює з дизайнерами, програмістами та UX-аналітиками, щоб створювати зручний і затребуваний продукт.
          </VericalPreview>

          <VericalPreview title='Backend' img={'/assets/main/backend.png'}>
            Backend-розробка - це набір апаратно-програмних засобів, за допомогою яких реалізована логіка роботи сайту. Попросту кажучи, це те, що приховано від очей користувача і відбувається поза його браузеромі комп'ютером, наприклад здійснення покупки, запис у базу даних, запит на дані, рендеринг.
          </VericalPreview>
        </div>

        <div className='dev-directions__video'>
          <iframe src="https://www.youtube.com/embed/QXacSDnRm8M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

      <section className="tech__accordion-section accordion-section">
        <SectionTitle>Рівні розвитку розробника</SectionTitle>

        <div className="accordion-section__content">
          <div className="accordion-section__text">
            <p className="accordion-section__paragraph">Як можна здогадатися розорбник це та людина яка ще з самого початку своєї кар'єри не мала уяви про веб-технології та веб розробку, тому і виникли такі поняття як рівні розвитку розробника. На мою думку влучніше сказати саме рівень розвитку а не рівень кваліфікації, тому що професіональний розробник повинен мати не лише розвинені Hard Skills, але й добре розвинені Soft Skills</p>

            <ReadMoreButton link={'https://tproger.ru/experts/junior-middle-senior-developers-differences/'} />
          </div>

          <div className="accordion-section__accordions">
            <Accordion title='Junior'>
              Зазвичай через 3 місяці після проходження стажування ти стаєш повноправною частиною команди, адже Junior – це людина, яка вже може повноцінно (але з допомогою більш досвідчених колег) закривати невеликі задачі. Не бійтеся задавати багато запитань, адже від джуніор розробника поки що ніхто не очікує ідеального виконання. Головною метою має бути не швидке закриття таски або тікета, а ЯКІСНЕ.
            </Accordion>

            <Accordion title='Middle'>
              В основному від позиції Middle очікують самостійного девелопера, який 80% задач може виконати самостійно, інколи, звернувшись, за допомогою до колег. Зазвичай людина готова зайняти цю позицію, маючи 1-3 роки досвіду в програмуванні.

              Розробник має орієнтуватися в design patterns, розуміти принципи SOLID та застосовувати їх на практиці. Техніки рефакторінга та code review також будуть у нагоді. Дуже важливою частиною є розуміння використання юніт тестів, а для детального розуміння підходів написання тестів можна прочитати книгу, наприклад Unit Testing Principles.
            </Accordion>

            <Accordion title='Senior'>
              Попри те, що ви бачите 95% оголошень про вакансії, тайтл Senior Developer не має жорсткої прив'язки до стажу роботи.

              Як правило, чим довше людина працює, тим більше у неї досвіду. У багатьох компаніях при визначенні рівня спеціаліста орієнтуються на стаж. Але кількість відпрацьованих років - це не єдине, що визначає сеньйора.

              Senior повинен мати такі якості: досвід, лідерські якості, наставництво, технічні знання і вміння            
            </Accordion>
          </div>
        </div>
      </section>
  
    </div>
  )
}

export default MainPage