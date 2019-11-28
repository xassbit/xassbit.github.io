import * as React from "react";
import P from "src/elements/P";
import Section from "src/elements/Section";
import Tab from "src/elements/Tab";
import {TabKey} from "src/data";

const Chronology: React.FunctionComponent = () =>
    <Section>
        <Tab title="Formative Years"
             subTitle="1991 to 2009"
             tabKey={TabKey.formativeYears}>
            <P>I was born in October 6th 1991 in Montemor-o-Novo, Portugal.</P>
            <P>In 1996 I started my musical education in classical percussion
                at the Academia de Música Eborense in Évora.</P>
            <P>During the last year of high school I opened the music store A Baqueta
                with the help from my family.</P>
            <P important>In 2009 I graduated from secondary school as the
                highest graded student from the Sciences and Technologies course.</P>
        </Tab>
        <Tab title="Physics in Porto"
             subTitle="2009 to 2012"
             tabKey={TabKey.physicsPorto}>
            <P important>In September of 2009 I moved from my hometown to study Physics at the
                University of Porto.</P>
            <P>I became envolved with the Portuguese Association of Physics Students
                where I've served as president of the directive committee and the head organizer
                of the 2011 and 2012 editions of the National Meeting of Physics Students.</P>
            <P>While studying Physics I came in contact with programming,
                having worked on solving problems with Python.</P>
            <P important>In 2013 I completed the BSc in Physics.</P>
        </Tab>
        <Tab title="Music in Porto"
             subTitle="2009 to 2012"
             tabKey={TabKey.musicPorto}>
            <P>While living in Porto I created stage performances as a solo artist
                for the Literary Club of Porto.</P>
            <P>I also joined sax player Paulo Alexandre Jorge to
                create the free jazz duo Bella Damião and
                worked as a music teacher at Carl Orff Projecto.</P>
            <P important>Together with Paulo I've released <a href="https://www.youtube.com/watch?v=isCAWqEle0c">
                an album</a>, played regularly all throughout
                Portugal and participated in the Free Jazz en Argentina festival
                in Buenos Aires, where we recorded <a href="https://www.youtube.com/watch?v=_CWuW2OvvN0">
                    a second album with local musicians</a>.</P>
        </Tab>
        <Tab title="Physics in Nijmegen"
             subTitle="20012 to 2013"
             tabKey={TabKey.physicsNijmegen}>
            <P>In 2013 I moved to the Netherlands for a one year stay at Radboud University Nijmegen
                to study theoretical particle physics under the ERASMUS protocol.</P>
            <P important>During these studies, I was introduced to problem-solving in C and C++.</P>
            <P>In the same year I've started experimenting with other venues of artistic production. As
                a result, I begun offering music production and graphic design services on Fiverr.com and
                shot <a href="https://www.youtube.com/watch?v=Ol-YuS183D8">a web series</a> documenting
                my life as an Erasmus student in the Netherlands.</P>
        </Tab>
        <Tab title="Solo Years"
             subTitle="2013 to 2016"
             tabKey={TabKey.soloYears}>
            <P important>I kept pursuing work in video production, having
                created <a href="https://www.youtube.com/watch?v=Nvx9DflRec4">the music
                    video Arritmia Aritmética</a> for band A-nimal and
                co-produced <a href="https://www.youtube.com/watch?v=NPdqXGMYZK4">the
                    ICPS 2014 video diaries</a>.</P>
            <P important>I launched the company Controlled Flame, to support my freelance work, and Arnhem Drums
                (later rebranded as <a href="https://jamwithhumans.com">Jam With Humans</a> lessons)
                through which I offered music lessons.</P>
            <P>In 2013 I discovered the podcasting universe, which lead to learning task,
                project and time management methodologies as well as exploring workflow
                automation using iOS and Mac OS - which ultimately lead to starting to learn iOS
                and web development.</P>
        </Tab>
        <Tab title="Consulting"
             subTitle="2016 to 2017"
             tabKey={TabKey.newcraft}>
            <P important>In May 2016 I started to work for the consulting agency Newcraft,
                in the position of junior PHP developer.</P>
            <P>Later the same year I briefly became the lead developer for an online store of one of the
                largest telecom companies in the Netherlands.</P>
            <P important>At the end of 2016 I moved to the data science team, to help developing a
                real-time marketing project in Scala, Apache Spark and Cassandra.</P>
            <P>Besides having worked for multiple clients with different technological needs,
                I gave lessons on Python to my colleagues and introduced my team to Django.</P>
        </Tab>
        <Tab title="In-house developer"
             subTitle="from 2017"
             tabKey={TabKey.srprsme}>
            <P important>In May 2017 I started to work for the tour operator srprs.me as a Django developer.</P>
            <P>I helped the company by migrating our projects to Webpack and by introducing the team to
                a new tech stack featuring a backend powered by Django Rest Framework and a frontend powered by
                React and Redux. A new website build on this stack was deployed to production in April of 2018.</P>
        </Tab>
        <Tab title="Improvisational music"
             subTitle="from 2014"
             tabKey={TabKey.jamWithHumans}>
            <P>From 2014 onwards I’ve focused not only on playing but also <a href="https://jamwithhumans.com">
                teaching</a> and
                composing improvisational music.</P>
            <P>With Jam With Humans I faded out individual music lessons and replaced them by
                workshops on improvisation and creativity.</P>
            <P important>In March 2017 I've released <a href="https://controlledflame.com/en/records/">
                the album “Not That Different”</a>,
                featuring Paulo Alexandre Jorge.</P>
            <P important>Starting in June 2017 I've been performing live with the Jam With Humans Orchestra - an
                offshoot of the workshops.</P>
        </Tab>
    </Section>;

export default Chronology;
