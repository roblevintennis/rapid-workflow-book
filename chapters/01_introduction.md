
<a id="introduction"></a>

# Introduction

**What is "Rapid Workflow"?**

Rapid Workflow encompasses all of the activities that allow you to rapidly develop the front-end of a web site or SPA (single-page app for the uninitiated).

Frameworks like [HTML5 Boilerplate][html5b], [Twitter Bootstrap][bootstrap], and Zurb's [Foundation][foundation] make it ridiculously easy to quickly put together acceptable "first draft" web pages. Even more full-blown workflow tools like [Yeoman][yeoman] can help us to—not just rapidly author web pages—but also update libraries, perform image optimizations, compression, minification, deployment, etc.

Once we've got an initial version of our web site, we can choose to iterate further, fully customizing it, or, scrap the whole idea and go back to the drawing board. The ability for lean start-ups to ["fail-fast"][failfast], pivot, adapt, get to market fast, etc., are all [key][failfast2] factors to success. The rapid workflow approach we're about to discuss provides guidance on how to use modern tooling to cope with the time sensitive realities of today.

**Other Information on Rapid Workflow**

While we'll be looking specifically at modern tooling for the front-end developer, there are some interesting and related resources regarding the general notion of improved development workflow that you might want to look at:

* Erica Heinz gave a nice presentation on utilizing rapid prototyping which is quite persuasive. Here are her [slides][ericaheinz-deck]. Rapid prototyping is akin to the rapid workflow approach we'll be discussing, and so many of her points are applicable.

* Jeff Gothelf and Josh Seiden are advocating an approach to UX which they call [LeanUX][leanux-smashing]. Also see these [slides][leanux-slides].

* Here's a nice [slide-deck][skip-wireframe] which proposes ditching wireframing altogether to instead use [Twitter Bootstrap][bootstrap] to prototype a responsive web site.

* The blogs of [Addy Osmani][addy] and [Paul Irish][paulirish] both have a large number of articles related to improved developer workflow.

**Standing on the shoulders of giants**

Every front-end developer has that perfect combination of tools and libraries that he or she already uses to improve their workflow. Sometimes its that special combination of plugins to trick out their favorite editor or IDE (e.g. the perfect Vim, Sublime Text, or WebStorm set up); sometimes its an assortment of custom shell scripts; sometimes its a certain combination of libraries that all projects get started with, etc. As we continue to learn of new tools, libraries, and best practices, we further pepper our set ups. But it turns out to be _really hard_ to keep up with what "the cool kids" are using at any given point in time. This is why _opinionated tools_ such as Yeoman and Grunt can help us out so much. We're provided an assortment of battle-tested developer tools that help us maintain best practices and speed up workflow.

In this book we'll discuss the following tools that will help us to achieve rapid workflow:

TODO: We need to work out exactly what goes on this bullet list

* Compass/Sass
* Twitter Bootstrap
* Yo, Grunt, and Bower
* Unicorn 
* Modernizr
* RequireJS
* JSHint

Once you've got a handle on these core tools, you may later choose to, say, swap Zurb Foundation in place of Twitter Bootstrap, LESS for Sass, etc. But the general philosophy and approach will be close enough to what you've learned that you'll be able to do so confidently.

_Please be forwarned that we won't be going extremely "deep" on these tools but, rather, we will provide enough of an introduction to gain a general understanding of what the tool does and how to get started with it. You should plan to consult each tool's documentation for in depth coverage._
