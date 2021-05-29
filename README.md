#### Medium like Blog-Backend

An Express and NodeJS based backend implementation of the [RealWorldAPI Spec](https://github.com/gothinkster/realworld/tree/master/api).

#### Install

> Please use NPM for installing and managing dependencies. If you use Yarn, make sure to run `prepare` script after installing packages: `yarn prepare`. This will install git hooks using husky.

```
# clone the repository to your local machine
$ git clone https://github.com/<YOUR-GITHUB-USERNAME>/Medium-like-Blog-Backend.git

# navigate to the project's directory
$ cd Medium-like-Blog-Backend

# install all the relevant (dev) dependencies using npm
$ npm install

# Copy .env.example to .env
$ It is recommended to install [MongoDB Compass](https://www.mongodb.com/try/download/compass) to visualize data in mongodb

# Start application
$ npm start

# Visit http://localhost:3030/ in your browser
```

#### Contributing

When contributing to this repository, please first discuss the change you wish to make via issue.

##### Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you
   do not have permission to do that, you may request the second reviewer to merge it for you.
