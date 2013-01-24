---
title: Adding New Samples

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
for example, to add a new sample to the Community Catalog just add it to
the `All_Samples.json` file.

You should never commit directly to
the main repository but rather
[contribute through your fork](Add_Overview.html#forking).

### Contributing to Existing Repositories and Samples

Identify what repository you will want to contribute to, and its lead.

You are responsible for submitting a
contribution agreement if necessary (see [approved signatories](http://blackberry.github.com/approvedSignatories.html)), and
collaborating with the repository lead to secure appropriate technical and legal review.

Fork the appropriate repository and apply the changes needed.  Then submit a pull request.
Interact with the reviewers until the change is acceptable to all parties, at which point
it will be merged in.

### Adding a New Sample

We recently started listing samples that reside in repositories outside of the
[BlackBerry Organization](http://github.com/blackberry).
When adding these samples, use the provided field to identify the samples's
origin.

We are still fine-tuning the guidelines on what samples are allowed in the catalog.
We want to be inclusive but we don't have much experience yet.
The basic requirement is that the samples are Open Source and that they are of interest to
the BlackBerry Developer Community.  Follow the usual "fork, edit, and pull request"
and we will have a conversation on the details.

### Updating the Catalog

You are responsible for updating the catalog, if necessary, whenever you update the sample.
This means two pull requests.

Fork the [Catalogs](http://github.com/blackberry/Catalogs) repository,
then modify the `All_Samples.json` file to reflect the new sample(s),
and submit a pull request.

### Editing the All_Samples.json file

GitHub supports inline file editing (\[[1]\], \[[2]\], \[[3]\]);
for simple changes, or very occasional contributors, you could edit
`All_Samples.json` directly that way.

[1]: <https://github.com/blog/143-inline-file-editing> "Inline File Editing"
[2]: <https://github.com/blog/844-forking-with-the-edit-button> "Forking with the Edit Button"
[3]: <https://github.com/blog/905-edit-like-an-ace> "Edit Like an Ace"

A more common flow is to fork the Catalogs repository and use a local editor.
See the notes on line separators in the [Overview](Add_Overview.html).

### Related Material

Also see:
* How to [Add a Repository to the Catalog][add repo]
* How to [Add a Component to the Catalog][add repo]


