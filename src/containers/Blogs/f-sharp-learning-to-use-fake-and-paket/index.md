Background: A year ago I discovered F# to be the next big thing in .Net world (apart from .Net core). F# is a functional-first language with OO capabilities. I quickly fell in love with it. I come from Javascript background and I had lost my touch with the back-end. Learning F# proved to be an excellent opportunity for me to hone my back-end skills and get acquainted with .Net way of doing things. My company is a through-and-through Microsoft shop and there’s a ton of guidance on C# readily available around me. But no help on F#. So I decided to participate in the mentorship program and funnily enough, I was selected! I was paired with a great mentor, straight from France — [Bouillier Clément](https://medium.com/@clem_bouillier)

![FSharp](https://cdn-images-1.medium.com/max/1200/1*6DpQJe-nX-beY3iw9Bbi9w.png)

I promised him that I would come up with something, some kind of system built with F#. But I’m still struggling with .Net ecosystem. So to tackle that, I started from the basics. The plan is to share my findings as I try newer things. This article is the first part of the series. I’d like to start from the nuts and bolts of any .Net project — _Dependency management and build scripts_. Let’s jump right into it.

## Paket

Paket is a dependency manager for .Net projects. The [first question](https://forums.fsharp.org/t/what-benefits-do-fake-and-paket-provide-over-traditional-ways/292) that I had on my mind — Why do I even need a dependency manager? The simple answer is — _You don’t need it for simple projects_. But since I’ve decided to take the difficult route to mastering F# and .Net, I thought why not figure out how this thing works just for the kicks? 😉

So Paket happens to be a replacement for Nuget. Think of using [yarn](https://yarnpkg.com/lang/en/) in place of [npm](https://docs.npmjs.com/cli/npm). You get a `paket.lock` file that describes exactly which versions of the dependencies (both direct and transitive) are to be installed. This helps get consistent installs across dev machines and build servers.

One of the great features of paket is that it can install packages from not only nuget, but you can get them from github as well!

If you’re using Visual Studio Code for development, you can use [Ionide-Paket](https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-Paket) plugin for managing your deps. This plugin will give you a simple interface to interact with Paket CLI.

![ionide-paket](https://cdn-images-1.medium.com/max/1200/1*EN2oL0LGhpVWq5RjrZ0_pw.png)

There are 3 files that you need to care about -

1. **paket.dependencies:** This file sits at the root of your project, generally next to your .sln file. It’s a simple list of dependencies that you need across the solution. For eg. NUnit for testing or FAKE for running build scripts.

2. **paket.references:** This file should be located next to your project files. If you have multiple projects you’ll have multiple paket.references files. The file lists all the dependencies required for that particular project. For eg. `Giraffe` or `Microsoft.DotNet.Watcher.Tools`.

3. **paket.lock**: This file is a complete record of all the direct and transitive dependencies. It lists down the exact version numbers of each package. You’ll want to commit this file into your version control system so that all developers and build servers will use the same versions.

To start using paket, simply download `paket.bootstrapper.exe` from their [github repo](https://github.com/fsprojects/Paket/releases) and place it at the root of your project. Then run the executable from your favorite shell like so — `paket.bootstrapper.exe init`. This will create a `.paket` folder. Now you’re ready to use the VS Code extension!

Remember to commit the `.paket` folder in your version controlling system so that others will use the same `paket.exe` and some other files for installing or updating the packages.

Paket comes with a nice set of commands that can be super useful in your day to day life. For instance — `paket outdated` command will identify packages which have newer versions available on nuget registry. Then you can simply run `paket update` to get the latest versions installed. It goes without saying that it will update your `paket.lock` file and you’ll want to commit the changes.

## FAKE

FAKE is Make in F#. If you have ever used make on Linux, you know what it does. It’s used for building executable from the source code, restoring packages by reading the package list, copying artifacts to a specific location and so on.

Again I thought, why do I even need a build script when I can just press F5 or run `dotnet run`? The answer can be found [here](https://blog.codinghorror.com/the-f5-key-is-not-a-build-process/).

FAKE is a DSL — Domain Specific Language, meaning a custom set of high level commands. You can think of FAKE as Gulp or Grunt of .Net world which is used as a task runner.

I haven’t been able to dig into the core stuff but I was able to write a passable build script that I’m using in my pet project. FAKE lets you define a bunch of `Target`s and then you state which target depends on which and then run them in the given order. For eg. If a target called “build” depends on “restore”, the “build” target will run right after running the “restore” target. Think of `Target` as an individual executable task.

_In short, it lets you define a set of build-steps and then you run them in the desired order._

FAKE is completely written in F# and it’s generally used for building .Net projects. But you can virtually build projects of any language because FAKE gives you full access to the command prompt/shell.

Let’s get your hands dirty and start writing your first build script using FAKE.

**Step 1: Install FAKE as a global dependency using Paket CLI.**

In VS Code, press ctrl+shift+p and type in “Paket: Add”. That should open up a dialog like this -

![step-1](https://cdn-images-1.medium.com/max/1200/1*bjG-0606tkZcV5dsr3Sefw.png)

Now enter the name of the package you want to install, in this case — “FAKE”

![step-2](https://cdn-images-1.medium.com/max/1200/1*btY5j0Y-TGFFiqFfG5ylwA.png)

This should set you up with our new dependency. Now all we need to do is load this dependency into a .fsx file and start writing the actual build steps.

**Step 2: Include FakeLib.dll in the build script**

In F#, `.fsx` files are script files. And in order to add a reference to an external dll file, you have to use `#r` syntax like so —

```
#r @"packages/FAKE/tools/FakeLib.dll"
```

Once you have that in place, you will be able to use FAKE and as a bonus — full access to intellisense.

**Step 3: Start writing the build tasks**

First task that I would like to have in my build script is to clean the `bin` and `obj` folders from all cs/fs project folders.

```fs
let appDirectory = Path.Combine("src", "PaketDemo")

let directoriesToClean () =
    DirectoryInfo.getSubDirectories (DirectoryInfo.ofPath "./src/")
    |> Array.collect (fun x -> [|Path.Combine(x.FullName, "bin"); Path.Combine(x.FullName, "obj")|])

Target.create "Clean" (fun _ ->
    Trace.log "--- Cleaning stuff ---"
    Shell.cleanDirs (directoriesToClean())
)
```

Your project directory structure may differ from mine. But in this particular example, the Target `Clean` calls `directoriesToClean()` utility function to get all the top-level subdirectories of `src` folder (assuming that they’re all individual projects) and append "bin" and "obj" to it. Then it flattens the array and returns it back to be used by `Shell.cleanDirs`.

Cool! So now we have a clean solution. Lets try to restore the packages before we actually build the project.

```fs
Target.create "Restore" (fun _ ->
    Shell.Exec (Path.Combine(".paket", "paket.exe"), "restore", "") |> ignore
)
```

This part of the script simply calls `paket.exe` and passes `restore` as a command. You can easily guess what this will do. Once we have all the packages restored, we can just go build the project. And for that, all you have to do is this —

```fs
Target.create "Build" (fun _ -> 
    Trace.log "--- Building the app ---"
    DotNet.build id (Path.Combine("src", "PaketDemo"))
)
```

We’re using `FAKE.DotNet` module to build the project. The argument we need to provide is the path to the startup project. Now that we have all the `Targets` defined, let’s define the dependency between them.

```fs
open Fake.Core.TargetOperators

"Clean" ==> "Restore" ==> "Build"
```

The `==>` operator is a part of `FAKE.Core.TargetOperators`. It has the signature `x:string -> y:string -> string`. All you need to know about this is that the script will run the Targets in the specified order.

I’ve uploaded the source code on [my github](https://github.com/KarandikarMihir/PaketWithFAKE) in case you want to take a closer look.

That’s it for now. I’m still learning how to use FAKE and Paket to their full potential. But I couldn’t wait to publish an article with my initial findings. I think these 2 libraries are really great and they have helped me understand how low level things work in .Net world.

If you see any mistake in the snippets or in the information, please drop a comment below. I’ll be more than happy to update the article.

I’ll come back with more stuff in coming days. Until then, good bye! Keep in touch on [Twitter](https://twitter.com/KarandikarMihir)

![good-bye](https://cdn-images-1.medium.com/max/1200/1*_sMjlmAz18RST27v1XoGMw.gif)


