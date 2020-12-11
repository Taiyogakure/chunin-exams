# Contributing code to Taiyogakure

Everyone is welcome to contribute code to [Taiyogakure Projects](https://github.com/Taiyogakure), provided that they are willing to
license their contributions under the same license as the project itself. We
follow a simple 'inbound=outbound' model for contributions: the act of
submitting an 'inbound' contribution means that the contributor agrees to
license the code under the same terms as the project's overall 'outbound'
license.

## How to contribute

The preferred and easiest way to contribute changes is to fork the relevant
project on github, and then [create a pull request](
https://help.github.com/articles/using-pull-requests/) to ask us to pull your
changes into our repo.

Some other points to follow:

 * Please base your changes on the `develop` branch.

 * Please follow the [code style requirements](#code-style).

 * Please include a [changelog entry](#changelog) with each PR.

 * Please [sign off](#sign-off) your contribution.

 * Please keep an eye on the pull request for feedback from the [continuous
   integration system](#continuous-integration-and-testing) and try to fix any
   errors that come up.

 * If you need to [update your PR](#updating-your-pull-request), just add new
   commits to your branch rather than rebasing.


- Before pushing new changes, ensure they don't produce linting errors. Commit any
files that were corrected.

- Please ensure your changes match the cosmetic style of the existing project,
and **never** mix cosmetic and functional changes in the same commit, as it
makes it horribly hard to review otherwise.

- Adding credits to the changelog is encouraged, we value your
contributions and would like to have you shouted out in the release notes!

### How do I know what to call the changelog file before I create the PR?


Obviously, you don't know if you should call your newsfile
`1234.bugfix` or `5678.bugfix` until you create the PR, which leads to a
chicken-and-egg problem.

There are two options for solving this:

 1. Open the PR without a changelog file, see what number you got, and *then*
    add the changelog file to your branch (see [Updating your pull
    request](#updating-your-pull-request)), or:

 1. Look at the [list of all
    issues/PRs](https://github.com/Taiyogakure/chunin-exams/issues), add one to the
    highest number you see, and quickly open the PR before somebody else claims
    your number.

    [This
    script](https://github.com/richvdh/scripts/blob/master/next_github_number.sh)
    might be helpful if you find yourself doing this a lot.

Sorry, we know it's a bit fiddly, but it's *really* helpful for us when we come
to put together a release!

## Documentation

There is a growing amount of documentation located in the [docs](docs)
directory. This documentation is intended primarily for sysadmins running their
own instance, as well as developers interacting externally with
Taiyogakure. [docs/dev](docs/dev) exists primarily to house documentation for]
evelopers. [docs/admin_api](docs/admin_api) houses documentation
regarding Admin API, which is used mostly by sysadmins and external
service developers.

New files added to both folders should be written in [Github-Flavoured
Markdown](https://guides.github.com/features/mastering-markdown/), and attempts
should be made to migrate existing documents to markdown where possible.


We accept contributions under a legally identifiable name, such as
your name on government documentation or common-law names (names
claimed by legitimate usage or repute). Unfortunately, we cannot
accept anonymous contributions at this time.

Git allows you to add this signoff automatically when using the `-s`
flag to `git commit`, which uses the name and email set in your
`user.name` and `user.email` git configs.


## Updating your pull request

If you decide to make changes to your pull request - perhaps to address issues
raised in a review, or to fix problems highlighted by [continuous
integration](#continuous-integration-and-testing) - just add new commits to your
branch, and push to GitHub. The pull request will automatically be updated.

Please **avoid** rebasing your branch, especially once the PR has been
reviewed: doing so makes it very difficult for a reviewer to see what has
changed since a previous review.

## Notes for maintainers on merging PRs etc

There are some notes for those with commit access to the project on how we
manage git [here](docs/dev/git.md).

## Conclusion

That's it! Taiyogakure is a very open and collaborative project as you might expect
given our obsession with open communication. 
