# DsMonorepo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨
This workspace houses three distinct services that work together seamlessly to enhance the development workflow.

## Services
**1. Design System**: 

The design system is a foundational component of our projects, providing consistency and reusability across our applications.
Built with Sass, it offers a robust set of styling guidelines and reusable components.
For more information, refer to the Design System [Readme](https://github.com/RomanyU1662160/DS_Monrepo/blob/main/packages/design-system/README.md).

**2. Component Library:**

Our component library is a collection of reusable React components that adhere to the guidelines set forth by the design system.
These components are bundled with Rollup for optimized performance.
They utilize the classes and CSS files provided by the design system, ensuring consistency in styling across applications.
For more information, refer to the [Readme](https://github.com/RomanyU1662160/DS_Monrepo/blob/main/packages/components-ui/README.md)

**3. React Playground App:**

This application serves as a playground environment to test the components exported from our component library.
It allows developers to experiment with different configurations and functionalities in an isolated environment.


## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx serve react-app` to start the development server. Happy coding!

## Build for production

Run `npx nx build react-app` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
