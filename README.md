This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Start Typescript
1. Create tsconfig file
```bash
touch tsconfig.json
```
2. Then run:
```
yarn dev
```
This command will detect and install the missing typescript dependencies:
    It looks like you're trying to use TypeScript but do not have the required package(s) installed.
    Installing devDependencies (yarn):
    - typescript
    - @types/react
    - @types/node

    We detected TypeScript in your project and created a tsconfig.json file for you.

The command create the file: next-env.d.ts => For enviroment variables.
*Next allow us to keep using js without migrate the current code to ts.

## Create Docker image (docker desktop running).

1. Add to next.config.js the experimental object.
2. Add to start script on package.json: -p ${PORT:=DOCKERFILE_EXPOSE_PORT_VALUE}

```bash
    docker build -t next-initial-demo .
```

## Run Docker image

    1. --name= is for naming de container (we can see it in docker desktop containers). It is optional but if we dont assign one docker chose some strange name.

    2. -p MiPort:ContainerPort 
 
```bash
    docker run --name=next-app -p 3001:3000 nextjs-initial-demo
``` 

We can see the app on localhost:3001
