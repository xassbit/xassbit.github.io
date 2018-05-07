import * as React from "react";
import P from "../../elements/p/P";
import Section from "../../elements/section/Section";
import Tab from "../../elements/tab/Tab";

const Chronology: React.StatelessComponent = () =>
    <Section>
        <Tab title="Formative Years - 1991 to 2009">
            <P>I was born in October 6th 1991 in Montemor-o-Novo, Portugal.</P>
            <P>In 1996 I started classical percussion education
                at the now extinct Academia de Música Eborense in Évora.</P>
            <P>On my last year of high school I founded the music store A Baqueta
                with the help from my family.</P>
            <P important>In 2009 I graduated from secondary school as the
                highest graded student from the Sciences and Technologies course.</P>
        </Tab>
        <Tab title="Physics in Porto - 2009 to 2012" open>
            <P>In September of 2009 I moved from my hometown to study Physics at the University of Porto.</P>
            <P>I became envolved with Physis, the Portuguese Association of Physics Students,
                where I've served as president of the directive committee and the head organizer
                of the 2011 and 2012 editions of the National Meeting of Physics Students.</P>
            <P>During my study of Physics I came in contact with solving problems with Python,
                as it was required for several courses during the whole course.</P>
            <P>In 2013 I completed the BSc in Physics.</P>
        </Tab>
        <Tab title="Music in Porto - 2009 to 2012">
            <P>Besides studying Physics, I've also also became a regular performer and music teacher in Porto.</P>
            <P>Created stage performances as a solo artist for the now defunct Literary Club of Porto.</P>
            <P>Joined sax player Paulo Alexandre Jorge to create the free jazz duo Bella Damião and
                joined Paulo's music education project Carl Orff Projecto as a music teacher.</P>
            <P>As Bella Damião we released a first album as a duo, played very reguarly
                in Portugal and participated in the Free Jazz en Argentina festival
                in Buenos Aires, where we recorded a second album with local musicians</P>
        </Tab>
        <Tab title="Physics in Nijmegen - 20012 to 2013" open>
            <P>In 2013 I moved to the Netherlands for a one year stay at Radboud University Nijmegen
                to study theoretical particle physics under the ERASMUS protocol.</P>
            <P>I was introduced to problem-solving in C and C++ during my stay in Nijmegen.</P>
            <P>During that time I've experimented with other venues of artistic production:
                started offering music production and graphic design services on Fiverr.com and
                shot a web series documenting my life as an Erasmus student in the Netherlands.</P>
        </Tab>
        <Tab title="Solo Years - 2013 to 2016">
            <P>In 2013 I started working more seriously in video production, having created the music
                video Arritmia Aritmética for band A-nimal and co-produced the ICPS 2014 video diaries.</P>
            <P>Worked as a freelancer under the company Controlled Flame and as a music teacher under
                the company Arnhem Drums (later rebranded as Jam With Humans lessons)</P>
            <P>Discovered the podcasting world, which lead to starting to learn task,
                project and time management methodologies as well as exploring workflow
                automation using iOS and Mac OS - which ultimately lead to starting to learn iOS
                and later web development.</P>
        </Tab>
        <Tab title="Consulting - 2016 to 2017" open>
            <P>In May 2016 started to work for the consulting agency Newcraft, in the position of junior PHP
                developer.</P>
            <P>Later the same year briefly became the lead developer for the online store of one of the
                largest telecom companies in the Netherlands</P>
            <P>At the end of 2016 I was moved to the data science team, to help developing a
                real-time marketing project in Scala, Apache Spark and Cassandra</P>
            <P>Besides having worked for multiple clients with different technology needs and stacks,
                gave internal lessons on Python and introduced the team to Django</P>
        </Tab>
        <Tab title="In-house developer - from 2017" open>
            <P>In May 2017 started to work for the tour operator srprs.me as a backend developer.</P>
            <P>Slowly started to take the role of solutions architect, having migrated our projects
                to Webpack and introduced the team to React and Redux for the front-end,
                and a REST framework for the frontend. A new website with this new tech stack was
                deployed to production in April of 2018.</P>
        </Tab>
        <Tab title="Improvisational music - from 2014">
            <P>From 2014 onwards I’ve focused only on not only playing but also teaching and
                composing improvisational music.</P>
            <P>Faded out individual music lessons and faded in workshops on improvisation.</P>
            <P>CD “Not That Different”, released on March 2017, with Paulo Alexandre Jorge.</P>
            <P>Presented the Jam With Humans Orchestra live in concert, starting in June 2017.</P>
        </Tab>
    </Section>;

export default Chronology;
