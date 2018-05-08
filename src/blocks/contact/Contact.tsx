import * as React from "react";
import P from "../../elements/p/P";
import Section from "../../elements/section/Section";

const Contact = () =>
    <Section bottomPadding>
        <P>You can see more about me at <a href="https://controlledflame.com">my website</a>.</P>
        <P>I can be contacted by email
            at <a href="mailto:controlledflame@gmail.com">controlledflame@gmail.com</a> and by phone
            at +31&nbsp;(0)6&nbsp;11&nbsp;47&nbsp;56&nbsp;48.</P>
        <P>This website is hosted at GitHub Pages. You can find its source
            code <a href="https://github.com/xassbit/xassbit.github.io">on GitHub</a>.</P>
    </Section>;

export default Contact;
