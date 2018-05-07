import * as React from "react";
import P from "../../elements/p/P";
import Section from "../../elements/section/Section";

const Contact = () =>
    <Section bottomPadding>
        <P>You can see more about me at <a href="https://controlledflame.com">my website: controlledflame.com</a>.</P>
        <P>I can be contacted by email at controlledflame@gmail.com and by phone
            at +31 (0)6 11 47 56 48.</P>
        <P>This website is hosted at GitHub Pages. You can find its source
            code <a href="https://github.com/xassbit/xassbit.github.io">on GitHub</a>.</P>
    </Section>;

export default Contact;
