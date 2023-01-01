import React from 'react'
import '@/styles/pages/Technologies.scss';
import SectionTitle from '@/components/SectionTitle';
import ReadMoreButton from '@/components/ReadMoreButton';
import Accordion from '@/components/Accordion';
import VerticalPreview from '../components/VerticalPreview';

const Technologies = () => {
  return (
    <div className='page tech__page'>
      <section className="tech__text-section text-section">
        <SectionTitle>Що таке веб технології</SectionTitle>

        <p className="text-section__text">
          Веб-технологія – це сукупність методів та програмно-технічних засобів, інтегрованих з метою ефективного опрацювання веб- ресурсів, які знаходяться у веб-просторі (локальному або глобальному, наприклад, мережі Інтернет). Дивлячись з професійної сторони, веб-технології це набір мов та технологій які допомагають розробнику писати код сайту. Серед таких технології можна виділити основні типи цих технологій: <b>Базові технології для побудови веб-сайтів</b> (HTML, CSS та JavaScript), <b>Фреймворки</b> та <b>Бібліотеки</b>, Технології для <b>тестування</b>, <b>Gакувальники</b> та інші.
        </p>
      </section>

      <section className="tech__accordion-section accordion-section">
        <SectionTitle>Базові технології</SectionTitle>

        <div className="accordion-section__content">
          <div className="accordion-section__text">
            <p className="accordion-section__paragraph">Сучасні веб-технології надають розробникам необмежені можливості реалізації своїх ідей. Для того, щоб ви могли використовувати весь їх потенціал, необхідно знати, як правильно їх використовувати.</p>
            <p className="accordion-section__paragraph">Сьогодні кожен веб розробник використвує такі базові технології, як HTML, CSS та JavaScript. За допомогою цих технологій будується все те, що ми бачимо на сайтах. Говорячи конкретно, HTML використовується щоб відобразити те що ми бачимо на сторінці, CSS - для того, щоб зробити контент сторінки більш красивим, а JavaScript - для того, щоб внести певний інтерактив на сайт.</p>

            <ReadMoreButton link={'https://developer.mozilla.org/en-US/docs/Web'} />
          </div>

          <div className="accordion-section__accordions">
            <Accordion title='HTML'>
              HTML (HyperText Markup Language) - стандартизована мова розмітки документів для перегляду веб-сторінок у браузері. Веб-браузери отримують HTML документ від сервера за протоколами HTTP/HTTPS або відкривають з локального диска, далі інтерпретують код в інтерфейс, який відображатиметься на екрані монітора.
            </Accordion>

            <Accordion title='CSS'>
              CSS (англ. Cascading Style Sheets, укр. Каскадні таблиці стилів) — це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду. Самі ж сторінки написані мовами розмітки даних. 
              CSS є основною технологією всесвітньої павутини, поряд із HTML та JavaScript.
            </Accordion>

            <Accordion title='JavaScript'>
              Динамічна, об'єктно-орієнтована прототипна мова програмування. Реалізація стандарту ECMAScript. Найчастіше використовується для створення сценаріїв вебсторінок, що надає можливість на боці клієнта (пристрої кінцевого користувача) взаємодіяти з користувачем, керувати браузером, асинхронно обмінюватися даними з сервером, змінювати структуру та зовнішній вигляд вебсторінки.
            </Accordion>
          </div>
        </div>
      </section>

      <section className="tech__accordion-section accordion-section">
        <SectionTitle>Технології продвинутого рівня</SectionTitle>

        <div className="accordion-section__content">
          <div className="accordion-section__text">
            <p className="accordion-section__paragraph">
              Звісно мати уявлення про базові технології це дуже добре та навіть необхідно, тому що без цього неможливо вивчати більш продвинуті технології. Відмінність базових технологій веб розробки від продвинутих полягає в ефективному використанню ресурсів комп’ютера користувача сайту, але не завжди це так, та в легкості розробки та підтриманню та розширення коду сайту в майбутньому.
            </p>
          </div>

          <div className="accordion-section__accordions">
            <Accordion title='Фреймворки'>
              Фреймворк - це інфраструктура програмних рішень, що полегшує розробку складних систем. Спрощено дану інфраструктуру можна вважати своєрідною комплексною бібліотекою, але при цьому вона має ряд обмежень, що задають правила створення структури проєкту та написання коду.
            </Accordion>

            <Accordion title='Бібліотеки'>
              Білбіотека - це збірка об'єктів чи підпрограм для вирішення близьких за тематикою задач. У залежності від мови програмування бібліотеки містять об'єктні модулі чи початковий код та дані, допоміжні для задіяння та інтеграції нових можливостей в програмні рішення. 

              Бібліотека може означати те саме, що модуль, або декілька модулів.
            </Accordion>

            <Accordion title='Препроцесори CSS'>
              Препроцесор CSS - це програма, яка має власний синтаксис, але може згенерувати з нього CSS код . Існує безліч препроцесорів. Більшість їх розширює можливості чистого CSS, додаючи такі опції як: домішки, вкладені правила, селектори успадкування та інших. Ці особливості полегшують роботи з CSS: спрощують читання коду та її подальшу підтримку.
            </Accordion>

            <Accordion title={'Шаблонізатори'}>
              Шаблонізатор - це програмне забезпечення, призначене для поєднання шаблонів із моделлю даних для створення результативних документів. Мова, якою написані шаблони, відома як мова шаблону. Ціллю цієї статті є результативний документ — це будь-який вид відформатованої вихідної інформації, у тому числі документи, вебсторінки або вихідний код (у генерації вихідного коду), цілком або фрагментами. Шаблонний рушій зазвичай включається як частина системи вебшаблонів або схеми додатків, і може використовуватися також як препроцесор або фільтр.
            </Accordion>

            <Accordion title={'Система керування версіями'}>
              Система керування версіями — інструмент, який дозволяє одночасно, не заважаючи один одному, проводити роботу над груповими проєктами.
            </Accordion>

            <Accordion title={'Пакувальники (збірка застосунків)'}>
              Технології цього типу застосовуються для ефективної збірки застосунків, розбиваючи код застосунка на бандли, для того щоб підтягувати файли тоді, коли це необхідно. Головна мета таких технологій оптимізувати використання ресурсів комп’ютера
            </Accordion>
          </div>
        </div>
      </section>

      <section className='tech__popular popular'>
        <SectionTitle>Популярні технології</SectionTitle>

        <ul className="popular__list">
          <VerticalPreview img={'/assets/logos/react.png'} title={'React'}>
            Відкрита JavaScript бібліотека для створення інтерфейсів користувача, яка покликана вирішувати проблеми часткового оновлення вмісту вебсторінки, з якими стикаються в розробці односторінкових застосунків. 
          </VerticalPreview>

          <VerticalPreview img={'/assets/logos/nodejs.png'} title={'Node.js'}>
            Платформа з відкритим кодом для виконання високопродуктивних мережевих застосунків, написаних мовою JavaScript. Якщо раніше JavaScript застосовувався для обробки даних в браузері користувача, то node.js надав можливість виконувати JavaScript-скрипти на сервері та відправляти користувачеві результат їхнього виконання. 
          </VerticalPreview>

          <VerticalPreview img={'/assets/logos/npm.png'} title={'npm'}>
            npm (node package manager) - Менеджер пакунків для мови програмування JavaScript. Для середовища виконання Node.js це менеджер пакунків за замовчуванням. Включає в себе клієнт командного рядка, який також називається npm, а також онлайн-базу даних публічних та приватних пакунків, яка називається реєстром npm.
          </VerticalPreview>

          <VerticalPreview img={'/assets/logos/firebase.png'} title={'Firebase'}>
            Платформа розробки мобільних та веб застосунків. Часто використовується для побудови real time застосунків
          </VerticalPreview>

          <VerticalPreview img={'/assets/logos/webpack.png'} title={'Webpack'}>
            Пакувальник, з відкритим кодом, статичних модулів для сучасних додатків JavaScript. Він створений переважно для JavaScript, але може трансформувати зовнішні ресурси, такі як HTML, CSS та зображення, якщо підключити відповідні завантажувачі
          </VerticalPreview>

          <VerticalPreview img={'/assets/logos/typescript.png'} title={'Typescript'}>
            Мова програмування, представлена Microsoft восени 2012; позиціонується як засіб розробки вебзастосунків, що розширює можливості JavaScript
          </VerticalPreview>

          <VerticalPreview img={'/assets/logos/sass.png'} title={'SASS'}>
            Скриптова метамова, яка інтерпретується в каскадні таблиці стилів (CSS). Sass розширює CSS, надаючи кілька механізмів, доступних в більш традиційних мовах програмування, зокрема об'єктно-орієнтованих мовах, але недоступних для CSS.
          </VerticalPreview>

          <VerticalPreview img={'/assets/logos/angular.png'} title={'Angular'}>
            Написаний на TypeScript front-end фреймворк з відкритим кодом, який розробляється під керівництвом Angular Team у компанії Google, а також спільнотою приватних розробників та корпорацій. Angular — це AngularJS, який був переосмислений та перероблений тією ж командою розробників
          </VerticalPreview>

          <VerticalPreview img={'/assets/logos/jest.png'} title={'Jest'}>
            Середовище тестування JavaScript, створене на основі Jasmine та підтримуване Meta. Він був розроблений і побудований Крістофом Каравой з упором на простоту та підтримку великих веб-додатків. Він працює з проектами, які використовують Babel, TypeScript, Node.js, React, Angular, Vue.js та Svelte.
          </VerticalPreview>
        </ul>
      </section>

      <section className='tech__statistic statistic'>
        <SectionTitle>Статистика</SectionTitle>

        <div className="statistic__content">
          <div className="statistic__item">
            <div className="statistic__item-image">
              <img src='/assets/statistic/satisfaction.jpg' alt='statistic' />
            </div>

            <h4 className="statistic__item-title">Задоволення від JavaScript фреймворку</h4>
          </div>

          <div className="statistic__item">
            <div className="statistic__item-image">
              <img src='/assets/statistic/interest.jpg' alt='statistic' />
            </div>

            <h4 className="statistic__item-title">Зацікавленість JavaScript фреймворком</h4>
          </div>

          <div className="statistic__item">
            <div className="statistic__item-image">
              <img src='/assets/statistic/usage.jpg' alt='statistic' />
            </div>

            <h4 className="statistic__item-title">Використання JavaScript фреймворку</h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technologies