import * as React from "react";
import Section from "../../elements/section/Section";
import Tab from "../../elements/tab/Tab";

const Chronology: React.StatelessComponent = () =>
    <Section bottomPadding>
        <Tab title="Formative Years - 1991 to 2009">
            <p>I was born in October 6th 1991 in Montemor-o-Novo, Portugal.</p>
            <p>In 1996 I started classical percussion education
                at the now extinct Academia de Música Eborense in Évora.</p>
            <p>On my last year of high school I founded the music store A Baqueta
                with the help from my family.</p>
            <p>In 2009 I graduated from secondary school as the
                highest graded student from the Sciences and Technologies course.</p>
        </Tab>
        <Tab title="Physics in Porto - 2009 to 2012">
            <p>In September of 2009 I moved from my hometown to study Physics at the University of Porto.</p>
            <p>I became envolved with Physis, the Portuguese Association of Physics Students,
                where I've served as president of the directive committee and the head organizer
                of the 2011 and 2012 editions of the National Meeting of Physics Students.</p>
            <p>In 2013 I completed the BSc in Physics.</p>
        </Tab>
        <Tab title="Music in Porto - 2009 to 2012">
            <p>Besides studying Physics, I've also also became a regular performer and music teacher in Porto.</p>
            <p>Created stage performances as a solo artist for the now defunct Literary Club of Porto.</p>
            <p>Joined sax player Paulo Alexandre Jorge to create the free jazz duo Bella Damião and
                joined Paulo's music education project Carl Orff Projecto as a music teacher.</p>
            <p>As Bella Damião we released a first album as a duo, played very reguarly
                in Portugal and participated in the Free Jazz en Argentina festival
                in Buenos Aires, where we recorded a second album with local musicians</p>
        </Tab>
        <Tab title="Physics in Nijmegen - 20012 to 2013">
            <p>In 2013 I moved to the Netherlands for a one year stay at Radboud University Nijmegen
                to study theoretical particle physics under the ERASMUS protocol.</p>
            <p>During that time I've experimented with other venues of artistic production:
                started offering music production and graphic design services on Fiverr.com and
                shot a web series documenting my life as an Erasmus student in the Netherlands.</p>
        </Tab>
        <Tab title="Solo Years - 2013 to 2016">
            <p>In 2013 I started working more seriously in video production, having created the music
                video Arritmia Aritmética for band A-nimal and co-produced the ICPS 2014 video diaries.</p>
            <p>Worked as a freelancer under the company Controlled Flame and as a music teacher under
                the company Arnhem Drums (later rebranded as Jam With Humans lessons)</p>
            <p>Discovered the podcasting world, which lead to starting to learn task,
                project and time management methodologies as well as exploring workflow
                automation using iOS and Mac OS - which ultimately lead to starting to learn iOS
                and later web development.</p>
        </Tab>
        <Tab title="Consulting - 2016 to 2017">
            <p>In May 2016 started to work for the consulting agency Newcraft, in the position of junior PHP
                developer.</p>
            <p>Later the same year briefly became the lead developer for the online store of one of the
                largest telecom companies in the Netherlands</p>
            <p>At the end of 2016 I was moved to the data science team, to help developing a
                real-time marketing project in Scala, Apache Spark and Cassandra</p>
            <p>Besides having worked for multiple clients with different technology needs and stacks,
                gave internal lessons on Python and introduced the team to Django</p>
        </Tab>
        <Tab title="In-house developer - from 2017">
            <p>In May 2017 started to work for the tour operator srprs.me as a backend developer.</p>
            <p>Slowly started to take the role of solutions architect, having migrated our projects
                to Webpack and introduced the team to React and Redux for the front-end,
                and a REST framework for the frontend. A new website with this new tech stack was
                deployed to production in April of 2018.</p>
        </Tab>
        <Tab title="Improvisational music - from 2014">
            <p>From 2014 onwards I’ve focused only on not only playing but also teaching and
                composing improvisational music.</p>
            <p>Faded out individual music lessons and faded in workshops on improvisation.</p>
            <p>CD “Not That Different”, released on March 2017, with Paulo Alexandre Jorge.</p>
            <p>Presented the Jam With Humans Orchestra live in concert, starting in June 2017.</p>
        </Tab>
    </Section>;

export default Chronology;
