import * as React from "react"
import {TabKey} from "src/data"
import P from "src/elements/P"
import Section from "src/elements/Section"
import Tab from "src/elements/Tab"

const Chronology: React.FunctionComponent = () =>
    <Section>
        <Tab title="Early Years"
             subTitle="1991 to 2009"
             tabKey={TabKey.earlyYears}>
            <P>I was born on October 6th 1991 in Montemor-o-Novo, Portugal.</P>
            <P>In 1996 I started my musical education in classical percussion at Academia de Música Eborense in
                Évora.</P>
            <P>During the last year of high school, I opened and managed the family music store A Baqueta (specialised
                in drumsticks and mallets).</P>
            <P important>In 2009 I graduated from secondary school as the highest graded student from the Sciences and
                Technologies class.</P>
        </Tab>
        <Tab title="University years" subTitle="2009 to 2013" tabKey={TabKey.university}>
            <P important>In September of 2009, I moved away from my hometown to study Physics at the University of
                Porto.</P>
            <P>I served as president of the directive committee of the Portuguese Association of Physics Students, as
                well as head organizer of the 2011 and 2012 editions of the National Meeting of Physics Students.</P>
            <P>While studying Physics I was taught problem solving in Python.</P>
            <P important>In 2013 I completed the BSc in Physics.</P>
            <P>In 2012 I moved to the Netherlands for a one year stay at Radboud University Nijmegen to study
                theoretical particle physics under the ERASMUS protocol.</P>
            <P important>During these studies, I was introduced to problem-solving in C and C++.</P>
        </Tab>
        <Tab title="Music/performance in Porto"
             subTitle="2009 to 2012"
             tabKey={TabKey.musicPorto}>
            <P>While living in Porto I created stage performances as a solo artist
                for the Literary Club of Porto.</P>
            <P>I also joined sax player Paulo Alexandre Jorge to
                create the free jazz duo Bella Damião and
                worked as a music teacher at Carl Orff Projecto.</P>
            <P important>Together with Paulo I've released <a href="https://www.youtube.com/watch?v=isCAWqEle0c">
                an album</a>, played regularly throughout
                Portugal and participated in the Free Jazz en Argentina festival
                in Buenos Aires, where we recorded <a href="https://www.youtube.com/watch?v=_CWuW2OvvN0">
                    a second album with local musicians</a>.</P>
        </Tab>
        <Tab title="Solo music/performance work"
             subTitle="from 2013"
             tabKey={TabKey.jamWithHumans}>
            <P>Between 2012 and 2014 I offered music production and graphic design services online, created <a
                href="https://www.youtube.com/watch?v=Ol-YuS183D8">a web series</a> documenting my life as an Erasmus
                student in the Netherlands, produced <a href="https://www.youtube.com/watch?v=Nvx9DflRec4">the music
                    video Arritmia Aritmética</a> and
                co-produced <a href="https://www.youtube.com/watch?v=NPdqXGMYZK4">the
                    ICPS 2014 video diaries</a>.</P>
            <P>I launched the company Controlled Flame to support my freelance work and Arnhem Drums
                (later rebranded as <a href="https://jamwithhumans.com">Jam With Humans</a>)
                through which I offered music lessons.</P>
            <P>Avidly listening to tech and self-employment podcasts lead me on a path to learn about task/project/time
                management methodologies, workflow automation using iOS and Mac OS and, ultimately, web and iOS
                development.</P>
            <P>In March 2017 I've released the free jazz album <a
                href="https://controlledflame.com/en/records/">
                Not That Different</a> and in June 2018 I've released the avant-garde rock album <a
                href="https://controlledflame.com/en/records/">
                I Didn't Expect Any Of This</a>.</P>
            <P important>With Jam With Humans, I replaced teaching individual music lessons by directing workshops on
                improvisation and creativity, as well as producing live shows. Our latest show <a
                    href="https://jamvarietyshow.com">The Jam Society</a> has been playing since
                late 2018, including a run in 2019 and an upcoming run in 2020 on the Edinburgh Festival Fringe.</P>
        </Tab>
        <Tab title="Software development"
             subTitle="from 2016"
             tabKey={TabKey.software}>
            <P important>From May 2016 to May 2017 I worked for the consulting agency Newcraft. I started in the
                position of junior PHP developer, having briefly taken a few months later the role became the lead
                developer for an online store of one of the largest telecom companies in the Netherlands.</P>
            <P important>At the end of 2016, I moved to the data science team of Newcraft, specifically to develop a
                real-time marketing project in Scala, Apache Spark and Cassandra.</P>
            <P>During my year in Newcraft I worked for some of the largest Dutch and international brands. I've also
                coached my colleagues in Python and Django development, having been the person introducing this
                framework to the company.</P>
            <P important>From May 2017 to August 2018 worked for the tour operator srprs.me as an in-house developer. I
                helped the company by migrating our projects to Webpack and by introducing the team to a new tech stack
                featuring a backend powered by Django Rest Framework and a frontend powered by React and Redux. A new
                website built on this stack was deployed to production in April of 2018.</P>
            <P important>In August 2018 I started working for Bagpoint, a start-up in the luggage logistics industry.
                Besides having contributed to the development of our enterprise-scale backend solution (in Python with
                an API built with Django Rest Framework and deployed in a Google Cloud infrastructure) and mobile
                solutions (in Typescript and React Native), I took such roles as software architect, project
                manager/scrum master and producer of a promotional video for potential clients.</P>
        </Tab>
    </Section>

export default Chronology
