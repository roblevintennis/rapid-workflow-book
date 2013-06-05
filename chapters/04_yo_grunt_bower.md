
<a id="yeoman"></a>

# Yeoman

In this chapter we'll be having a look at the workhorse workflow tool [Yeoman][yeoman]. Yeoman's core consists of three tools: [Yo][yo], [Grunt][grunt], and [Bower][bower]. We will go over each in depth. If you haven't read the section on Yeoman in the [Setting Up](#setting_up) chapter, go read that and ensure you're properly set up to use Yeoman.

## What is Yeoman?

At its heart, Yeoman is a workflow power-tool that provides a suite of popular front-end tools to facilitate developing with best practices and efficient workflow. It's pioneers, [Addy Osmani][addy] and [Paul Irish][paulirish], are deeply commited to making the modern web development process better and faster. While there are a ton of tools available in the Yeoman eco-system, its imperative to learn its core tools first. Let's dig in.

## Yo

The first core tool we'll look at is Yo, Yeoman's scaffolding tool that helps you to efficiently bootstrap projects. It not only scaffolds out your app, but also gives you sensible default configuration files that get you up and running quickly.

With Yo, there are three main things to learn:

* How to use Yo to bootstrap a project
* How to install custom generators
* How to create your own custom generators

We'll put off learning how to build a custom generator for a later chapter and now have a look at common `Yo` use.

### Yeoman's Default Generator

As you should have seen in the Yeoman section of the [Setting Up](#setting_up) chapter, by default Yeoman already ships with the `webapp` generator. This default generator is immediately useful with its sensible scaffold choices of [HTML5 Boilerplate][html5b], [jQuery][jquery], [Modernizr][modernizr], and optionally, [Twitter Bootstrap][bootstrap]. If you choose to use [Bootstrap][bootstrap], you can also optionally select to use the [Sass][sass] preprocessor. You can probably get along fine for many front-end projects just using this single generator (especially since Bower, Yeoman's package manager, allows you to simply add libraries on an as needed basis. _We'll learn about that tool in just a bit_). Magically, Yeoman creates _grunt tasks_ for your project when you use this tool so you'll benefit from an sensible initial set up.

The main command to get started with the `webapp` generator is simply:

```bash
yo webapp
```

Answer the few questions and your off and running. Let's take a look at installing other generators next.

### Installing Generators

Perhaps you'd like to use the venerable [Backbone Boilerplate][bbb] via Yeoman. To do so you would first need to install the generator:

```bash
npm install -g generator-bbb
```

_This assumes you've installed node.js (which bundles `npm`). If not, again, go to the [section on setting up Yeoman](#yeoman_setup) before proceeding)_

Next you would simply create a project directory and issue the `yo bbb` command as follows:

```bash
mkdir project && cd $_ && yo bbb
```

As usual, you can build and preview your Yeoman project using grunt as follows:

```bash
grunt server
```

As you may have noticed, we've installed the `generator-bbb`, but used `bbb` when issuing the `yo` command. This seems to be an undocumented idiom as `generator-angular` would be triggered with `yo angular`, etc.

## Grunt

The next core tool we'll have a look at is Yeoman's build tool extraordinaire [Grunt][grunt]. Grunt allows you to efficiently build and deploy your application, run tests, and preview your changes instantaneously. It's used by Twitter, jQuery, and [many other high-profile projects][gruntusers]. Grunt has a mountain of features and plugins available and we'll only be covering some of them here; of course you can always reference their [docs][gruntdocs] once you're comfortable with the basics.

The basics of how Grunt's command line system works are as follows:

* you run the Grunt CLI in a project directory that contains a `Gruntfile.js`
* the Grunt CLI runner loads the grunt library
* using the configurations found in that `Gruntfile.js` it then executes the task(s) as you've requested

_If you're project has not yet loaded its dependencies, you'll need to do so with_:

```bash
npm install
```

### package.json

The `package.json` file is just a simple JSON file that declaratively specifies which dependencies should be included in your Grunt based project. See Grunt's documentation on the [package.json][gruntpackage] for more information and an example on how this works. Luckily, when using Yeoman, we get a nice default `package.json` which can serve as a starting point for further customization.

Besides hand editing the `package.json` file itself, you can choose to install new packages with the following general syntax:

```bash
npm install PACKAGE --save-dev
```

(where `PACKAGE` is the desired `npm` package you'd like installed). This will both install the package and add it to your `package.json` configuration file.

### Gruntfile

The `Gruntfile.js` is simply a JavaScript file that contains your project's configuration and tasks. (CoffeeScript may be used instead of JavaScript but we won't be covering that here). It should be placed at the root directory of your project (as with the `package.json` file discussed earlier).

Taking a very high-level look at the contents of a typical `Gruntfile.js` we will find the following:

* An outer "wrapper" function

```javascript
module.exports = function(grunt) {
    // ...
};
```

* An initial configuration section:

```javascript
  grunt.initConfig({
    // ...
  });
```

If you're familiar with JavaScript (and you better be for this book), you'll notice that `initConfig` is passed an _object literal_. That object literal represents a "configuration object" that will thereafter be available throughout the `Gruntfile.js` as `grunt.config`. The general purpose of this section is to set up any global initialization or bootstrapping required by your Grunt tasks.

* Default task

```javascript
    grunt.registerTask('default', ['task1', 'task2']);
```

The `registerTask` method is a general purpose means for registering Grunt tasks. It just so happens that here we've specified 'default' task which will be run by Grunt when we issue `grunt` without specifying any additional arguments.

Another example of using `registerTask`, can be seen from the boiler-plate generated by Yeoman when you run `yo webapp`. If you look at that generated `Gruntfile.js` it will contain something like:

```javascript
    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',
        'mocha'
    ]);
```

In this case, the task name is called `test`, and will, in turn, run a set of test related tasks.

We'll learn more about the power of registering tasks later, but this should suffice for having an initial understanding of what's going on. You may want to take a quick break and try the following from an arbitrary directory of your choosing:

```bash
mkdir tmp && cd $_ && yo webapp
cat Gruntfile.js # or just open in an editor
```

Using your editor or "grep-fu", find all the places in that file that use `grunt.registerTask`. It should be contextually evident what going on. Congratulations! You've now got a bit more of an idea what task Yeoman is helping you with out of the box.

### Custom Tasks

TBD - Go over creating a simple custom task, etc.
http://gruntjs.com/getting-started#custom-tasks
http://net.tutsplus.com/tutorials/javascript-ajax/meeting-grunt-the-build-tool-for-javascript/
http://merrickchristensen.com/articles/gruntjs-workflow.html


### Going Further

While you now have a nice grounding in Grunt, we've only scratched the surface. Please have a look at the [Grunt Documentation][gruntdocs] for further mastery.


## Bower

Yeoman's front-end package manager, Bower, helps you to manage your application's dependencies via a small set of command lines that make installing and updating libraries a breeze.

TBD

## Custom generators

TBD
Searching for generators
https://github.com/yeoman/yeoman/wiki/Getting-Started
http://benclinkinbeard.com/blog/2013/04/a-quick-and-dirty-introduction-to-yeoman-generator-development/


