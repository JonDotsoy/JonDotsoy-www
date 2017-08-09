# The [@jondotsoy][]'s website

The [@jondotsoy][]'s website. The code source used to make the [jon.soy](https://jon.soy).


## How to install

Use npm to install the code

    $ npm install

and run the watch code

    $ npm run watch


## How to publish

> __Private mode__

Connect the environment with docker-machine

    $ docker-machine env <machine>

Build the image

    $ docker-compose build

In your `docker-compose.yml` file, update the service with image `jondotsoy-www` and update the services with docker.

    $ cd .../server
    $ vim docker-compose.yml
    $ docker-compose up -d


[@JonDotsoy]: https://github.com/JonDotsoy "(JonDotsoy) Jonathan Delgado"
