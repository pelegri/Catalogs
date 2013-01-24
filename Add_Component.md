---
title: Adding a Component to the Catalog

layout: basic
---
{% include common-defs.md %}

The community catalogs
([Overview][add overview])
list Open Source samples, components and repositories
of interest to the BlackBerry developer community.   Some of these components are led by
RIM employees, some are not.

The catalogs are maintained in JSON files
in the [Catalogs](http://github.com/blackberry/Catalogs) repository;
for example, to add a new component to the Community Catalog just add it to
the `All_Components.json` file.

You should never commit directly to
the main repository but rather
[contribute through your fork](Add_Overview.html#forking).

### Adding a New Component

The Components Catalog lists all the Open Source components that are useful to 
the developer targetting the BlackBerry 10 platform.
It lists all components in repos in the
[BlackBerry Organization](http://github.com/blackberry) organization
as well as those not there.

We are still fine-tuning the guidelines on what Components are allowed in the catalog.
We want to be inclusive but we don't have much experience yet.
The basic requirement is that the components are Open Source and that they are of interest to
the BlackBerry Developer Community.  Follow the usual "fork, edit, and pull request"
and we will have a conversation on the details.

### Updating the Catalog

You are responsible for updating the catalog, if necessary, whenever you update the sample.
This means two pull requests.

Fork the [Catalogs](http://github.com/blackberry/Catalogs) repository,
then modify the `All_Components.json` file to reflect the new component(s),
and submit a pull request.

### Editing the All_Components.json file

GitHub supports inline file editing (\[[1]\], \[[2]\], \[[3]\]);
for simple changes, or very occasional contributors, you could edit
`All_Components.json` directly that way.

[1]: <https://github.com/blog/143-inline-file-editing> "Inline File Editing"
[2]: <https://github.com/blog/844-forking-with-the-edit-button> "Forking with the Edit Button"
[3]: <https://github.com/blog/905-edit-like-an-ace> "Edit Like an Ace"

A more common flow is to fork the Catalogs repository and use a local editor.
See the notes on line separators in the [Overview](Add_Overview.html).

### Related Material
Also see:
* How to [Add a Sample to the Catalog][add sample]
* How to [Add a Repository to the Catalog][add repo]

