
<a id="introduction"></a>

# Introduction

**What is "Rapid Workflow"?**

You can think of this as an abbreviation to encompass all of the activities involved with rapidly developing the front-end of a web site or application. Let's examine traditional workflow...

Many projects for the web go from the meeting room, to a wireframing tool or sketch pad, and then quickly move to the [Adobe Creative Suite][creativesuite] where high fidelity mocks are created. Then, these mocks must be painfully sliced and diced in to assets. Finally, a front-end developer meticulously hand crafts "pixel-perfect" pages ready for web consumption. While getting pristine looking sites may still involve some of these steps, we now have some alternatives.

Frameworks like [HTML5 Boilerplate][html5b], [Twitter Bootstrap][bootstrap], and Zurb's [Foundation][foundation] make it ridiculously easy to quickly put together acceptable "first draft" web pages. Even more full-blown workflow tools like [Yeoman][yeoman] can help us to—not just rapidly author web pages—but also update libraries, perform image optimizations, compression, minification, deployment, etc. You can still choose to sprinkle wireframing, or UX testing, etc., in to your workflow, but the point is that designing in the browser is now a viable option.

Once we've got an initial version of our web site, we can choose to iterate further, fully customizing it, or, scrap the whole idea and go back to the drawing board. The ability for lean start-ups to ["fail-fast"][failfast], pivot, adapt, get to market fast, etc., are all [key][failfast2] factors to success. The rapid workflow approach we're about to discuss provides guidance on how to use modern tooling to cope with the time sensitive realities of today.

**Other Information on Rapid Workflow**

While we'll be looking specifically at modern tooling for the front-end developer, there are some interesting and related resources regarding the general notion of improved development workflow that you might want to look at:

* Erica Heinz gave a nice presentation on utilizing rapid prototyping which is quite persuasive. Here are her [slides][ericaheinz-deck]. Rapid prototyping is akin to the rapid workflow approach we'll be discussing, and so many of her points are applicable.

* Jeff Gothelf and Josh Seiden are advocating an approach to UX which they call [LeanUX][leanux-smashing]. Also see these [slides][leanux-slides].

* Here's a nice [slide-deck][skip-wireframe] which proposes ditching wireframing altogether to instead use [Twitter Bootstrap][bootstrap] to prototype a responsive web site.

* The blogs of [Addy Osmani][addy] and [Paul Irish][paulirish] both have a large number of articles related to improved developer workflow.

**Standing on the shoulders of giants**

Every front-end developer has that perfect combination of tools and libraries that he or she already uses to improve their workflow. Sometimes its that special combination of plugins to trick out their favorite editor or IDE (e.g. the perfect Vim, Sublime Text, or WebStorm set up); sometimes its an assortment of custom shell scripts; sometimes its a certain combination of libraries that all projects get started with, etc. As we continue to learn of new tools, libraries, and best practices, we further pepper our set ups. But it turns out to be _really hard_ to keep up with what "the cool kids" are using at any given point in time. This is why an _opinionated tool_ such as Yeoman can help us out so much. We're provided an assortment of battle-tested developer tools that help us maintain best practices and speed up workflow.

One of the things that might make a tool like Yeoman challenging for you to initially use, is that it leverages a huge number of workflow tools that you might not already be familiar with. If you already use [HTML5 Boilerplate][htmlb], [Compass][compass] and [Sass][sass], [Modernizr][modernizr], etc., you might feel right at home. If not, don't worry, we'll be looking at the main tools required to be productive in upcoming chapters.

However, we certainly don't need to have mastery of each and every tool included with Yeoman to get immediate benefits. In a recent [interview][paulinterview] with [netmagazine.com][netmag], [Paul Irish][paulirish], one of the core developers of [Yeoman][yeoman], addresses an interesting question regarding the use of libraries we don't fully understand:

> "...there’s a common sentiment that says: 'If you don’t know how something works, you shouldn’t use it.' JavaScript libraries serve a purpose of papering over browser APIs to create a much more functional API to interface with. But these libraries sit on top of the browser so, if we take the same argument that says you shouldn't use something you don't [understand], are we going to apply that to the entire browser as well? It’s hard to say that you should understand the entirety of the browser before you use it," he adds.

Interestingly, the Yeoman tool itself has so many sub-components, that only the most seasoned front-end developer will come to it understanding them all. It's easy to feel bit overwhelmed at first. One of the goals of this book is to help the reader understand some of these tools individually so they can use workflow tools like Yeoman more effectively.

We'll discuss:

* Compass/Sass
* Yo, Grunt, and Bower
* Twitter Bootstrap
* Modernizr
* RequireJS
* JSHint

Once you've got a handle on these core tools, you may later choose to, say, swap Zurb Foundation in place of Twitter Bootstrap, LESS for Sass, etc. But the general philosophy and approach will be close enough to what you've learned that you'll be able to do so confidently.

_Please be forwarned that we won't be going extremely "deep" on these tools but, rather, we will provide enough of an introduction to gain a general understanding of what the tool does and how to get started with it. You should plan to consult each tool's documentation for in depth coverage._
