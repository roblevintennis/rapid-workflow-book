

# Introduction

**Why rapid prototyping?**

Many projects for the web go from the meeting room, to a wireframing tool or sketch pad, and then quickly move to the [Adobe Creative Suite][creativesuite] where high fidelity mocks are created. Then, these mocks must be painfully sliced and diced in to assets. Finally, a front-end developer meticulously hand crafts "pixel-perfect" pages ready for web consumption. While getting pristine looking sites may still involve some of these steps, we now have quicker alternatives.

Frameworks like [HTML5 Boilerplate][html5b], [Twitter Bootstrap][bootstrap], and Zurb's [Foundation][foundation] make it ridiculously easy to quickly put together acceptable web page prototypes. Even more full-blown workflow tools like [Yeoman][yeoman] can integrate—not just rapid prototyping—but also things like library updating, image optimization, compression, minification, deployment, etc.



Once we've got an initial prototype of our web site, we can choose to iterate further, fully customizing it, or, scrap the whole idea and go back to the drawing board. The ability for lean start-ups to ["fail-fast"][failfast], pivot, adapt, get to market fast, etc., are all [key][failfast2]. The rapid prototyping approach we'll be discussing in this book provides some tools to help the developer to cope with these time sensitive realities.

So, there you have it, my elevator pitch on why rapid prototyping is an important addition to your tool kit. Yes, a lot more could be said (see links in the section below), but I'll purposely depart early from any sort of long-winded persuasive argument so we can get to the fun stuff..."doing".

**More info please!**

Erica Heinz gave a nice presentation on utilizing rapid prototyping which is quite persuasive. Here are her [slides][ericaheinz-deck].

Jeff Gothelf and Josh Seiden are advocating an approach to UX which they call [LeanUX][leanux-smashing]. Also see these [slides][leanux-slides].

Here's a nice [slide-deck][skip-wireframe] which proposes ditching wireframing altogether to instead use [Twitter Bootstrap][bootstrap] to prototype a responsive web site.

**Standing on the shoulders of giants**

Every front-end developer has that perfect combination of tools and libraries that he or she uses to improve workflow. Sometimes its that special combination of plugins to trick out their favorite editor or IDE (e.g. the perfect Vim, Sublime Text, or WebStorm set up); sometimes its an assortment of custom shell scripts; sometimes its a certain combination of libraries that all projects get started with, etc. As we continue to learn of new tools, libraries, and best practices, we further pepper our set ups. But it turns out to be _really hard_ to keep up with "the cool kids". This is why an _opinionated tool_ such as Yeoman helps out so much. We're greeted with an assortment of battle-tested components that help us maintain best practices while speeding up our workflow. But we do need to do a bit of homework ourselves to really benefit...or do we?

In a recent [interview][paulinterview] with [netmagazine.com][netmag], [Paul Irish][paulirish], one of the core developers of [Yeoman][yeoman], addresses an interesting question regarding the use of libraries we don't fully understand:

> "...there’s a common sentiment that says: 'If you don’t know how something works, you shouldn’t use it.' JavaScript libraries serve a purpose of papering over browser APIs to create a much more functional API to interface with. But these libraries sit on top of the browser so, if we take the same argument that says you shouldn't use something you don't [understand], are we going to apply that to the entire browser as well? It’s hard to say that you should understand the entirety of the browser before you use it," he adds.

Obviously, we want to generally understand "what's going on", but we don't want to get so offtrack with researching how things work that we completely sideline our current projects. We have to strike a balance.

Interestingly, the Yeoman tool itself has so many sub-components, that only the most seasoned front-end developer will come to it understanding them all. It's easy to feel bit overwhelmed at first. One of the goals of this book is to help the reader understand some of these tools individually so they can use workflow tools like Yeoman more effectively.

We'll discuss:

* Twitter Bootstrap
* Compass/Sass
* Modernizr
* RequireJS
* JSHint
* OptiPNG and JPEGTran

And of course we'll look at Grunt and Bower (both of which are now part of Yeoman 1.0 itself). Once you've got a handle on these tools, you may later choose to, say, swap Zurb Foundation in place of Twitter Bootstrap, LESS for Sass, etc. But the general philosophy and approach will be close enough to what you've learned that you'll be able to do so confidently.

_Please be forwarned that we won't be going extremely "deep" on these tools but, rather, we will provide enough of an introduction to gain a general understanding of what the tool does and how to get started with it. You should plan to consult each tool's documentation for in depth coverage._
