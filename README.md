# Learn basics of Clojure/script and Reagent

Materials and links for clojure workshop @ Reactive 2015

Presentation can be found in folder presentation

# Before workshop 

Install [leiningen](http://leiningen.org/)

For linux install rlwrap `sudo apt-get install rlwrap`

Install some text editor preferably [Light table](http://lighttable.com/)

### Run some commands to download stuff to prevent jaming wifi at once

Download and start clojure repl 
* `lein repl` 
* wait to start 

For clojurescript development use [re-frame template](https://github.com/Day8/re-frame-template)
* `lein new re-frame <project-name>`
* `cd <project-name>`
* `lein figwheel dev`
* wait

Or if you want only clojurescript repl without web stuff (on node for example).
[https://github.com/clojure/clojurescript/wiki/Quick-Start](https://github.com/clojure/clojurescript/wiki/Quick-Start)

# At workshop


## For begginers interactive workshop from Cognitect

See [https://github.com/cognitect/clojure-lab](https://github.com/cognitect/clojure-lab)
* Basic concepts of clojure with interactive REPL.
* 2-day workshop held at Clojure/West 2015
* lot of explanation and some excercise

## Materials about different topics

### Cheatsheets

Great for learning new functions and what they do.

[http://clojure.org/cheatsheet](http://clojure.org/cheatsheet)

[http://cljs.info/cheatsheet/](http://cljs.info/cheatsheet/)

[https://en.wikibooks.org/wiki/Learning_Clojure/Reader_Macros](https://en.wikibooks.org/wiki/Learning_Clojure/Reader_Macros)
* for strange looking characters at code

### Destructuring

[http://blog.jayfields.com/2010/07/clojure-destructuring.html](http://blog.jayfields.com/2010/07/clojure-destructuring.html)

### Javascript interoperability

[http://www.spacjer.com/blog/2014/09/12/clojurescript-javascript-interop/](http://www.spacjer.com/blog/2014/09/12/clojurescript-javascript-interop/)

### Identity, state and values 

* [http://clojure.org/state](http://clojure.org/state)
* [http://stackoverflow.com/questions/9132346/clojure-differences-between-ref-var-agent-atom-with-examples](http://stackoverflow.com/questions/9132346/clojure-differences-between-ref-var-agent-atom-with-examples)
* [Video Are We There Yet by Rich Hickey](http://www.infoq.com/presentations/Are-We-There-Yet-Rich-Hickey)

## What to code in clojure?

[http://www.codewars.com/](http://www.codewars.com/)
* Improve your skills by training with others on real code challenges
* Clojure is supported.
* See other solution but only after solving problem
* have automatic test for you


[https://github.com/gigasquid/wonderland-clojure-katas](https://github.com/gigasquid/wonderland-clojure-katas)
* Collection of Clojure katas inspired by Lewis Carroll and Alice in Wonderland.
* They have links to solution of other users.



# Web frontend stuff

## Reagent

A simple ClojureScript interface to React.
[https://github.com/reagent-project/reagent](https://github.com/reagent-project/reagent)

Tutorial 
[https://github.com/jonase/reagent-tutorial]([https://github.com/jonase/reagent-tutorial)

Detailed intro with live examples
[http://reagent-project.github.io/](http://reagent-project.github.io/)

Template
[https://github.com/reagent-project/reagent-template](https://github.com/reagent-project/reagent-template)

## Devcards

Enviroment for better development of UI application. 
[https://github.com/bhauman/devcards](https://github.com/bhauman/devcards)

Template
[https://github.com/bhauman/devcards-template](https://github.com/bhauman/devcards-template)

Can be used with reagent template
`lein new reagent <name> +devcards`

## Re-frame

Pattern for writing SPAs in ClojureScript, using Reagent.
[https://github.com/Day8/re-frame](https://github.com/Day8/re-frame)

Template
[https://github.com/Day8/re-frame-template](https://github.com/Day8/re-frame-template)


# After workshop

## Some great video presentation

TODO 

But anything from Rich Hickey or David Nolan is great (search on youtube ;-) 

### Other presentation

[http://www.slideshare.net/thnetos/clojure-intro](http://www.slideshare.net/thnetos/clojure-intro)
[http://www.slideshare.net/bmabey/clojure-plainandsimple](http://www.slideshare.net/bmabey/clojure-plainandsimple) 

 